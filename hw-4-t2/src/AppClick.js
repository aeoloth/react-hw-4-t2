import React, { Component } from 'react';

class AppClick extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };

        this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {
        this.setState({count: this.state.count + 1})
    }

    render() {
        return (
            <button onClick={this.handleClick} >
                На меня нажали {this.state.count} раз (class)
            </button>
        )
    }
}

export default AppClick;