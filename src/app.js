class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: props.options
        }
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.pickOne = this.pickOne.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleRemoveOption = this.handleRemoveOption.bind(this);
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options) {
                this.setState(() => ({ options })); 
            }
        } catch(e) {
            // Do Nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    pickOne() {
        const optionIndex = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[optionIndex]);
    }
    handleRemoveAll() {
        this.setState(()=>({options: []}));
    }
    handleRemoveOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => !(optionToRemove === option))
        }))
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
                    subTitle={subTitle}
                />
                <Action
                    hasOptions={this.state.options.length > 0}
                    pickOne={this.pickOne}
                />
                <Options
                    options={this.state.options}
                    handleRemoveAll={this.handleRemoveAll}
                    handleRemoveOption={this.handleRemoveOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}
IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subTitle}</h2>
        </div>
    );
}
Header.defaultProps = {
    title: 'Indecision!!'
}

const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.pickOne}>What should I do?</button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleRemoveAll} >Remove All</button>
            {props.options.length === 0 && <p>Please enter an item to get started.</p>}
            {props.options.map((option)=> (
                <Option
                    key={option}
                    optionText={option}
                    handleRemoveOption={props.handleRemoveOption}
                />))}
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
           {props.optionText}
           <button
                onClick={(e)=> {
                    props.handleRemoveOption(props.optionText)
                }}
            >
            Remove
            </button>
       </div>
   );
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
        if (!error) {
            e.target.elements.option.value = '';
        }
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