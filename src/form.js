const Form = class{

    render() {
        return`
        <form method="post" class="">
            <input type="text" class="">
        </form>`
    }

    run() {
        document.querySelector('.root').innerHTML = render();
    }
}

export default Form;