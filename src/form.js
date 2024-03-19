const Form = class {
  constructor() {
    this.el = document.querySelector('.root');
    fetch('https://dpe-api-service-dev-xfyprtzkyq-ew.a.run.app/token', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=&username=coda_school_student&password=XEUgknQ)GDCf%40K%3A%5D2T6%60c_Y%3Ddb%26%2BM9&scope=&client_id=&client_secret='
    }).then(response=>console.log(response));
    this.run();
  };

  hiddenForm() {
    const el = document.querySelector('#submit');
    el.addEventListener("click", function (event) {
      event.preventDefault();
        document.getElementById("form").hidden = true;
        document.getElementById("form2").hidden = false;
      },
      false,
    );
  }

  hiddenForm2() {
    const el = document.querySelector('#submit2');
    el.addEventListener("click", function (event) {
      event.preventDefault();
        document.getElementById("form2").hidden = true;
        document.getElementById("form3").hidden = false;
      },
      false,
    );
  }

  run() {
    this.hiddenForm();
    this.hiddenForm2()
  };
};

new Form();