let count = 0;

const addOne = () => {
    ++count;
    renderCounterAgain();
};
const minusOne = () => {
    --count;
    renderCounterAgain();
};
const reset = () => {
    count = 0;
    renderCounterAgain();
}

var rootApp = document.getElementById('appRoot'); 

const renderCounterAgain = () => {
    var template = (
        <div>
            <h1>Count = {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
    
    ReactDOM.render(template, rootApp);
};

renderCounterAgain();