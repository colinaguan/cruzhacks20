import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GetStarted extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Get Started</h2>
                <Link to={"/home"}>
                    <button type="button" className="btn btn-light" onClick={this.props.handleFinishStart}>Home</button>
                </Link>
            </div>
        );
    }
}

export default GetStarted;
