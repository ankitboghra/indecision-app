class IndecisionApp extends React.Component {
    render() {
        const title="Indecision App";
        const subTitle="Let's begin the show.";
        const options=['One', 'Two', 'Three'];

        return (
            <div>
                <Header title={title} subTitle={subTitle}/>
                <Action />
                <Options options={options} />
                <AddOption />
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
    pickOne() {
        alert('Pick one');    
    }
    render() {
        return (
            <div>
                <button onClick={this.pickOne}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {    
    handleRemoveAll() {
        console.log(this);
        alert('Remove alll');
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll} >Remove All</button>
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
    handleFormSubmit(e) {
        e.preventDefault();
        
        const option = e.target.elements.option.value;
        if(option.trim()){
            alert(option);
        }
    }
    render() {
        return (
            <div>
            <form onSubmit={this.handleFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add option</button>
            </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('appRoot'));