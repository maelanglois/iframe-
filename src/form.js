const Form = class {
    constructor() {
        this.el = document.querySelector('.root');
        this.run();
    };

    render() {
        return `
        <form method="post">
            <div class="num-ademe">
                <input type="text" class="" placeholder="Numéro Ademe" name="num-ademe" class="form">
            </div>
        </form>`;
    };

    run() {
        this.el.innerHTML = this.render();
    };
};

const myForm = new Form();
