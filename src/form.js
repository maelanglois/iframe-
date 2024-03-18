const Form = class {
  constructor() {
    this.el = document.querySelector('.root');
    this.run();
  };

    render() {
        return `
        <form method="post">
            <div class="num-ademe">
                <label for="Numéro Ademe" class="label">Je rentre mon numéro Ademe</label>
                <input type="text" class="" placeholder="Numéro Ademe" name="num-ademe" class="input">
                <button type='submit' class="submit">Optimiser mon DPE -></button>
            </div>
        </form>`;
    };

  run() {
    this.el.innerHTML = this.render();
  };
};

const myForm = new Form();
