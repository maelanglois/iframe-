const Form = class {
  constructor() {
    this.el = document.querySelector('.root');

    this.run();
  };

  hiddenForm() {
    const el = document.querySelector('#submit');
    const el2 = document.querySelector('#iframe');
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