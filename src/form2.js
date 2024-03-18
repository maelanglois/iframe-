const Form2 = class {
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
    <form method="post">
      <div class="num-ademe">
        <p>Wesh</p>
      </div>
    </form>`;
  };

  run() {
    this.onClick(this.rend);
  };
};

const myForm2 = new Form2();
