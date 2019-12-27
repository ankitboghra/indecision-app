const app = {
    title: "Indecision App",
    subtitle: "Let the show begin!",
    options: [],
}

const onFormSubmit = e => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    render();
}

const onRemoveAll = e => {
    e.preventDefault();
    app.options = [];
    render();
}

const optionsList = options => {
    return <ul>{options.map((option)=><li key={option}>{option}</li>)}</ul>;
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <h3>{app.subtitle}  </h3>
            <p>{app.options.length > 0 ? "Here are your options:" : "No options"}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button disabled={app.options.length === 0} onClick={onRemoveAll}>Remove All</button>
            {optionsList(app.options)}
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add option</button>
            </form>
        </div>
    );

    const rootApp = document.getElementById('appRoot'); 

    ReactDOM.render(template, rootApp);
}

render();