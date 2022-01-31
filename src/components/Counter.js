import React, { Component } from 'react';

export default class Counter extends Component {
    render() {
        return <div>
            <h2>{this.props.count}</h2>

        </div>;
    }
}
