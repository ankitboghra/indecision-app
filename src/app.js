// To run babel
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

var template = <h1>Hello Ankit!!</h1>;

var rootApp = document.getElementById('appRoot'); 

ReactDOM.render(template, rootApp);
