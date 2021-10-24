import React, {Component} from 'react';

class Toggler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggled: true
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggled: !state.isToggled
        }))
    }

    render() {
        const isToggled = this.state.isToggled;
        return (
            <div>
                <div className="container">
                    <h1 className="title">CComponent</h1>
                    <p>
                        {isToggled ? "Hello Component" : "Goodbye Component"}
                    </p>
                    <button className="btn" onClick={this.handleClick}>click me</button>
                </div>
            </div>
        )
    }
}

export default Toggler;


