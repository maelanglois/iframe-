const UserForm = Class {
  constructor() {
    this.el = document.querySelector('.root');
    this.el2 = document.querySelector('body');
    this.rend = this.render();
    this.run();
  };

  onClick(render) {
    const el3 = document.querySelector('.help');
    const el2 = document.querySelector('body');
    const el = document.querySelector('.root');

    el3.addEventListener('click', (event) => {
      event.preventDefault()
      var xhr = new XMLHttpRequest(); 
      xhr.open('POST', 'form.js');
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          el2.removeChild(el);
          el2.innerHTML = render;
        }
      };
      xhr.send();
    });
  }

  render() {
    return `
    <div>
      <div>
        <form>
          <label for="firstname">Prénom</label>
          <input name="firstname" id="firstname" type="text" placeholder="Votre prénom">

          <label for="lastname">Nom</label>
          <input name="lastname" id="lastname" type="text" placeholder="Votre nom">

          <label for="phone">N° de téléphone</label>
          <input name="phone" id="phone" type="tel" placeholder="Votre numéro de téléphone">

          <label for="email">Adresse Mail</label>
          <input name="email" id="email" type="email" placeholder="Votre adresse email">

          <label for="address">Adresse de votre bien</label>
          <input name="address" id="address" type="text" placeholder="Votre adresse email">
        </form>
      </div>
      <div>
        <form>
          <input type="radio" id="" name="" value="">
          <label for="">Propriétaire occupant</label><br>
          <input type="radio" id="" name="" value="">
          <label for="">Propriétaire bailleur</label>
          <input type="radio" id="" name="" value="">
          <label for="">Futur Propriétaire</label>
          <input type="radio" id="" name="" value="">
          <label for="">Locataire</label>
        </form>
      </div>

    </div>
    <div>
      <div>
        Google Maps
      </div>
      <div>
        Legals and guaranties
      </div>
    </div>
    `
  };

  run() {
    this.onClick(this.rend);
  };
};

const myForm2 = new Form2();
