const Two = class {
  constructor() {
    this.el = document.querySelector('.root');
    this.rend = this.render();
    this.run();
  };

  onClick(render) {
    const el3 = document.querySelector('.submit2');
    const el2 = document.querySelector('.form');
    const el = document.querySelector('.root');

    el3.addEventListener('click', (event) => {
      event.preventDefault()
      var xhr = new XMLHttpRequest(); 
      xhr.open('POST', 'form2.js');
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          el.removeChild(el2);
          el.innerHTML = render;
        }
      };
      xhr.send();
    });
  }

    render() {
        return `
            <div class="contain">
                <div class="datas-title">Le classement de votre logement est : </div>
                <div class="datas-sub">Une note de G correspond au top 7% des logements français les plus énergivores</div>
                <div class="datas-disp">
                    <div class="datas-one">
                        <div class="data-title">Votre étiquette énergie -</div>
                        <div class="schema-disp">
                            <div class="schema-data">309 kWh/m²/an</div>
                            <div class="schema-data">114 kg CO2/m²/an</div>
                        </div>
                        Votre logement est classé G. En tant que passoire thermique :
                        <ul>
                            <li>Il sera interdit à la location à partir de 2025</li>
                            <li>Il consomme en moyenne 2 fois plus que le reste des logements français</li>
                        </ul>
                    </div>
                    <div class="datas-two">
                        <div class="data-title">Schéma de déperditions de chaleur -</div>
                        <ul>
                            <li>19% Ventilation</li>
                            <li>19% Ponts thermiques</li>
                            <li>19% Sols</li>
                            <li>19% Toitures ou plafond</li>
                            <li>19% Murs</li>
                            <li>19% Portes et fenêtres</li>
                        </ul>
                    </div>
                </div>
                <div class="datas-title">Nous avons concocté 2 scénarios pour améliorer votre DPE</div>
                <div class="datas-sub">Ces scénarios sont sur-mesure. Grâce à votre DPE, notre logiciel récupère +300 paramètres et relevés techniques de votre bien et conçoit des scénarios de travaux précis, pour votre bien, et pas un autre.</div>
                <div class="sc-disp">

                </div>
            </div>
        `;
    };

  run() {
    this.onClick(this.rend);
    console.log('C');
  };
};

new Two();
