const UserForm = class {
  constructor() {
    this.el = document.querySelector('.root');
    this.el2 = document.querySelector('body');
    this.rend = this.render();
    this.run();
  };

  onClick(render) {
    const el3 = document.querySelector('.submit');
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
      <form>
        <div>
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
        </div>
        <div>
          <div>
            <p>Je suis...</p>
            <input type="radio" id="landlord_in" name="user_type" value="landlord_in">
            <label for="landlord_in">Propriétaire occupant</label>
            <input type="radio" id="landlord_out" name="user_type" value="landlord_out">
            <label for="landlord_out">Propriétaire bailleur</label>
            <input type="radio" id="landlord_futur" name="user_type" value="landlord_futur">
            <label for="landlord_futur">Futur Propriétaire</label>
            <input type="radio" id="tenant" name="user_type" value="tenant">
            <label for="tenant">Locataire</label>
          </div>
          <div>
            <p>Comptez-vous réaliser des travaux de rénovations prochainement ?</p>
            <input list="renovation">
            <datalist id="renovation">
            <option value="Oui, dans moins de 3 mois">
            <option value="Oui, dans les 6 mois">
            <option value="Oui, dans plus de 6 mois">
            <option value="Non">
            <option value="Je ne sais pas">
            </datalist>
          </div>
          <div>
            <p>Avez-vous déjà un artisan ?</p>
            <input type="radio" id="craftsman_yes" name="craftsman" value="craftsman_yes">
            <label for="craftsman_yes">Oui</label>
            <input type="radio" id="craftmans_no" name="craftsman" value="craftmans_no">
            <label for="craftsman_no">Non</label>
          </div>
          <div>
            <input type="checkbox" id="" name="" value="">
            <label for="">J'accepte d'être recontacté par un artisan partenaire pour un devis estimatif</label><br>
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
            <label for="vehicle2">Je m'abonne à la newsletter Optimo</label><br>
          </div>
        </div>
        <input type="submit" value="Obtenir mes scénari de travaux ->">
      </form> 
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

const myForm2 = new UserForm();
