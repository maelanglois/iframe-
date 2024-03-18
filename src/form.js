const Form = class{
    constructor() {
        el = document.querySelector('.root');
        run();
    };

    render() {
        return`
        <form method="post">
            <div class="num-ademe">
                <input type="text" class="" placeholder="Numéro Ademe" name="num-ademe" class="form">
            </div>
        </form>`
    };

    run() {
        el.innerHTML = render();
    };
};

export default Form;
