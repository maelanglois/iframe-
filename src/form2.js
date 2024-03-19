const UserForm = class {
  constructor() {
    this.el = document.querySelector('.root');
    this.el2 = document.querySelector('body');
    this.run();
  };

  onClick() {
    const el3 = document.querySelector('.submit');
    const el2 = document.querySelector('body');
    const el = document.querySelector('.root');

    el3.addEventListener('click', (event) => {
      event.preventDefault()
      var xhr = new XMLHttpRequest(); 
      xhr.open('POST', 'form.js');
      const num_ademe = document.querySelector('#num_ademe');
      const rend = this.render(num_ademe);
      this.calculDpe(num_ademe);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          el2.removeChild(el);
          el2.innerHTML = rend;
        }
      };
      xhr.send();
    });
  }

  calculDpe(num_ademe){
     fetch('https://dpe-api-service-dev-xfyprtzkyq-ew.a.run.app/token', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=&username=coda_school_student&password=XEUgknQ)GDCf%40K%3A%5D2T6%60c_Y%3Ddb%26%2BM9&scope=&client_id=&client_secret='
    })
    .then(response=> console.log(response)); 
    /* fetch(`https://dpe-api-service-dev-xfyprtzkyq-ew.a.run.app/calcul_dpe/${num_ademe}`, {
      mode: 'no-cors',
      method: 'get',
      headers: {
        'accept': 'application/json',
        'Authorization': 'Bearer Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjb2RhX3NjaG9vbF9zdHVkZW50IiwiZXhwIjoxNzEwODU0NTg3fQ.KkJiShrBW7x9T5-QDueaPdXlAMVp9erNoPECIG_gv7w'
      }
    })
    .then(response => console.log(response))
    .catch((error) => {
      reject(error);
    }); */

  }

  render(num_ademe) {
    return `
    <div class="user-form">
      <div class="user-questions">
        <form>
          <div class="user-info">
            <div class="user-line"
              <input type='hidden' id='num_ademe' value='${num_ademe}'>

              <label for="firstname">Prénom</label>
              <input name="firstname" id="firstname" type="text" placeholder="Votre prénom" required>

              <label for="lastname">Nom</label>
              <input name="lastname" id="lastname" type="text" placeholder="Votre nom" required>
            </div>

            <div class="user-line">
              <label for="phone">N° de téléphone</label>
              <input name="phone" id="phone" type="tel" placeholder="Votre numéro de téléphone" required>

              <label for="email">Adresse Mail</label>
              <input name="email" id="email" type="email" placeholder="Votre adresse email" required>
            </div>

            <div class="user-line"
              <label for="address">Adresse de votre bien</label>
              <input name="address" id="address" type="text" placeholder="Votre adresse postale" required>
            </div>
          </div>
          <div>
            <div>
              <p>Je suis...</p>
              <input type="radio" id="landlord_in" name="user_type" value="landlord_in" required>
              <label for="landlord_in">Propriétaire occupant</label>
              <input type="radio" id="landlord_out" name="user_type" value="landlord_out" required>
              <label for="landlord_out">Propriétaire bailleur</label>
              <input type="radio" id="landlord_futur" name="user_type" value="landlord_futur" required>
              <label for="landlord_futur">Futur Propriétaire</label>
              <input type="radio" id="tenant" name="user_type" value="tenant" required>
              <label for="tenant">Locataire</label>
            </div>
            <div>
              <p>Comptez-vous réaliser des travaux de rénovations prochainement ?</p>
              <select id="renovation">
                <option value="Oui, dans moins de 3 mois">Oui, dans moins de 3 mois</option>
                <option value="Oui, dans les 6 mois">Oui, dans les 6 mois</option>
                <option value="Oui, dans plus de 6 mois">Oui, dans plus de 6 mois</option>
                <option value="Non">Non</option>
                <option value="Je ne sais pas">Je ne sais pas</option>
              </select>
            </div>
            <div>
              <p>Avez-vous déjà un artisan ?</p>
              <input type="radio" id="craftsman_yes" name="craftsman" value="craftsman_yes" required>
              <label for="craftsman_yes">Oui</label>
              <input type="radio" id="craftmans_no" name="craftsman" value="craftmans_no" required>
              <label for="craftsman_no">Non</label>
            </div>
            <div>
              <input type="checkbox" id="" name="" value="">
              <label for="">J'accepte d'être recontacté par un artisan partenaire pour un devis estimatif</label><br>
              <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
              <label for="">Je m'abonne à la newsletter Optimo</label><br>
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
    this.onClick();
  };
};

const myForm2 = new UserForm();
