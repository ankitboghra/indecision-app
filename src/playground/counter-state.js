class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
        this.onReset = this.onReset.bind(this);
        this.state={
            count: 0,
        };
    }

    onIncrement() {
        this.setState((prevState)=>{
            return {
                count: prevState.count + 1
            } 
        })
    }
    onDecrement() {
        this.setState((prevState)=>{
            return {
                count: prevState.count - 1
            } 
        })
    }
    onReset() {
        this.setState((prevState)=>{
            return {
                count: 0
            } 
        })
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count} </h1>
                <button onClick={this.onIncrement}>+1</button>
                <button onClick={this.onDecrement}>-1</button>
                <button onClick={this.onReset}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('appRoot'));