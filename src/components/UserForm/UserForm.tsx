import './UserForm.css'
import { Component } from 'react';

export default class UserForm extends Component<
    { onOptionChange, onFormSubmit },
    { description: string, selectedOption: string }
> {

    constructor(props) {
        super(props);
        this.state = {
            description: "",
            selectedOption: "Instagram"
        };
    }

    handleDescriptionChange = changeEvent => {
        this.setState({
            description: changeEvent.target.value
        });
    }

    handleOptionChange = changeEvent => {
        this.setState({
            selectedOption: changeEvent.target.value
        });
        this.props.onOptionChange(changeEvent.target.value);
    };

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
        this.props.onFormSubmit(this.state.description);
        return;
    };

    render() {
    return (
        <form onSubmit={this.handleFormSubmit}>
            <div>
                <h3>Describe your Ad</h3>
                <textarea rows={ 3 } onChange={ this.handleDescriptionChange } />
            </div>

            <div className="flex center">
                <div className='flex margins'>
                    <div className="radio">
                        <label>
                            <input
                                type="radio"
                                name="react-tips"
                                value="Instagram"
                                checked={ this.state.selectedOption === "Instagram" }
                                onChange={ this.handleOptionChange }
                                className="form-check-input"
                            />
                            Instagram
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input
                                type="radio"
                                name="react-tips"
                                value="Twitter"
                                checked={ this.state.selectedOption === "Twitter" }
                                onChange={ this.handleOptionChange }
                                className="form-check-input"
                            />
                            Twitter
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input
                                type="radio"
                                name="react-tips"
                                value="Story"
                                checked={ this.state.selectedOption === "Story" }
                                onChange={ this.handleOptionChange }
                                className="form-check-input"
                            />
                            Story
                        </label>
                    </div>

                </div>
                <button type="submit">Generate Ad!</button>
            </div>
        </form>
    )}
}
