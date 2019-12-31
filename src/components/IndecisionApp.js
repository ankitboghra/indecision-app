import React from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';

export default class IndecisionApp extends React.Component {
    state = {
        options: this.props.options
    }
    
    pickOne = () => {
        const optionIndex = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[optionIndex]);
    }
    handleRemoveAll = () => {
        this.setState(()=>({options: []}));
    }
    handleRemoveOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => !(optionToRemove === option))
        }))
    }
    handleAddOption = (option) => {
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

Header.defaultProps = {
    title: 'Indecision!!'
}