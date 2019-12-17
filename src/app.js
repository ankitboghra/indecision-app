// To run babel
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

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

const optionsList = options => {
    return <ul>{options.map((option)=><li>{option}</li>)}</ul>;
}

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <h3>{app.subtitle}  </h3>
            <p>{app.options.length > 0 ? "Here are your options:" : "No options"}</p>
            <p>{app.options.length}</p>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add option</button>
            </form>
            {optionsList(app.options)}
        </div>
    );

    const rootApp = document.getElementById('appRoot'); 

    ReactDOM.render(template, rootApp);
}

render();