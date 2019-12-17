"use strict";

// To run babel
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

var app = {
    title: "Indecision App",
    subtitle: "Let the show begin!",
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    render();
};

var onRemoveAll = function onRemoveAll(e) {
    e.preventDefault();
    app.options = [];
    render();
};

var optionsList = function optionsList(options) {
    return React.createElement(
        "ul",
        null,
        options.map(function (option) {
            return React.createElement(
                "li",
                { key: option },
                option
            );
        })
    );
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    alert(option);
};

var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        React.createElement(
            "h3",
            null,
            app.subtitle,
            "  "
        ),
        React.createElement(
            "p",
            null,
            app.options.length > 0 ? "Here are your options:" : "No options"
        ),
        React.createElement(
            "button",
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            "What should I do?"
        ),
        React.createElement(
            "button",
            { disabled: app.options.length === 0, onClick: onRemoveAll },
            "Remove All"
        ),
        optionsList(app.options),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add option"
            )
        )
    );

    var rootApp = document.getElementById('appRoot');

    ReactDOM.render(template, rootApp);
};

render();
