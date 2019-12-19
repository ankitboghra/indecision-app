class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: []
        }
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.pickOne = this.pickOne.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
    }

    pickOne() {
        const optionIndex = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[optionIndex]);
    }
    handleRemoveAll() {
        console.log(this);
        this.setState(()=>({options: []}));
    }
    handleAddOption(option) {
        if(!option) {
            return 'Please enter a valid value.'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists.'
        }

        this.setState((prevState) => {
            return {
                options: [...prevState.options, option]
            };
        })
    }

    render() {
        const title = "Indecision App";
        const subTitle = "Let's begin the show.";

        return (
            <div>
                <Header 
                    title={title}
                    subTitle={subTitle}
                />
                <Action
                    hasOptions={this.state.options.length > 0}
                    pickOne={this.pickOne}
                />
                <Options
                    options={this.state.options}
                    handleRemoveAll={this.handleRemoveAll}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button disabled={!this.props.hasOptions} onClick={this.props.pickOne}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {    
    render() {
        return (
            <div>
                <button onClick={this.props.handleRemoveAll} >Remove All</button>
                {this.props.options.map((option)=> <Option key={option} optionText={option}/>)}
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
             <div>
                {this.props.optionText}
            </div>
        );
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            error: ''
        }
    }
    handleFormSubmit(e) {
        e.preventDefault();
        
        const option = e.target.elements.option.value;
        const error = this.props.handleAddOption(option);
        this.setState(() => ({error}))
    }
    render() {
        return (
            <div>
                <p>{this.state.error}</p>
                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" name="option"></input>
                    <button>Add option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('appRoot'));