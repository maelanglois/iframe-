const Form = class{

    render() {
        return`
        <form method="post">
            <div class="num-ademe">
                <input type="text" class="" placeholder="Numéro Ademe" name="num-ademe">
            </div>
        </form>`
    }

    run() {
        document.querySelector('.root').innerHTML = render();
    }
}

export default Form;