import React from 'react';

export default class AddOption extends React.Component {
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