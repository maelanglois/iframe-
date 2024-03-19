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
    <div class="user-form">
      <div class="user-questions">
        <form>
          <div class="reg-disp">
            <div class="reg-inp">
              <label for="firstname">Prénom</label>
              <input name="firstname" id="firstname" type="text" placeholder="Votre prénom" required>
            </div>
            <div class="reg-inp">
              <label for="lastname">Nom</label>
              <input name="lastname" id="lastname" type="text" placeholder="Votre nom" required>
            </div>
            <div class="reg-inp">
              <label for="phone">N° de téléphone</label>
              <input name="phone" id="phone" type="tel" placeholder="Votre numéro de téléphone" required>
            </div>
            <div class="reg-inp">
              <label for="email">Adresse Mail</label>
              <input name="email" id="email" type="email" placeholder="Votre adresse email" required>
            </div>
            <div class="reg-inp">
              <label for="address">Adresse de votre bien</label>
              <input name="address" id="address" type="text" placeholder="Votre adresse postale" required>
            </div>
          </div>
          <hr>
          <div>
            <div calss="reg-disp">
              <p>Je suis...</p>
              <div class="reg-info">
                <input type="radio" id="landlord_in" name="user_type" value="landlord_in" required>
                <label for="landlord_in">Propriétaire occupant</label>
              </div>
              <div class="reg-info">
                <input type="radio" id="landlord_out" name="user_type" value="landlord_out" required>
                <label for="landlord_out">Propriétaire bailleur</label>
              </div>
              <div class="reg-info">
                <input type="radio" id="landlord_futur" name="user_type" value="landlord_futur" required>
                <label for="landlord_futur">Futur Propriétaire</label>
              </div>
              <div class="reg-info">
                <input type="radio" id="tenant" name="user_type" value="tenant" required>
                <label for="tenant">Locataire</label>
              </div>
            </div>
            <hr>
            <div class="reg-disp-col">
              <div>Comptez-vous réaliser des travaux de rénovations prochainement ?</div>
                <select id="renovation" class="reg-select">
                  <option value="Oui, dans moins de 3 mois">Oui, dans moins de 3 mois</option>
                  <option value="Oui, dans les 6 mois">Oui, dans les 6 mois</option>
                  <option value="Oui, dans plus de 6 mois">Oui, dans plus de 6 mois</option>
                  <option value="Non">Non</option>
                  <option value="Je ne sais pas">Je ne sais pas</option>
                </select>
            </div>
            <hr>
            <div class="reg-disp-col">
              <div>Avez-vous déjà un artisan ?</div>
              <div class="reg-abo">
                <input type="radio" id="craftsman_yes" name="craftsman" value="craftsman_yes" required>
                <label for="craftsman_yes">Oui</label>
              </div>
              <div class="reg-abo">
                <input type="radio" id="craftmans_no" name="craftsman" value="craftmans_no" required>
                <label for="craftsman_no">Non</label>
              </div>
            </div>
            <hr>
            <div class="reg-disp-col">
              <div class="reg-abo">
                <input type="checkbox" id="" name="" value="">
                <label for="">J'accepte d'être recontacté par un artisan partenaire pour un devis estimatif</label>
              </div>
              <div class="reg-abo">
                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
                <label for="">Je m'abonne à la newsletter Optimo</label>
              </div>
            </div>
          </div>
          <input type="submit" class="submit" value="Obtenir mes scénari de travaux ->">
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
    </div>
    `
  };

  run() {
    this.onClick(this.rend);
  };
};

const myForm2 = new UserForm();
