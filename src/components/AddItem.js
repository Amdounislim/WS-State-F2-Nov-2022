import React, { Component } from 'react';

export default class AddItem extends Component {

    state = {
        text: ""
    }


    render() {
        return <div>
            <input type='text' onChange={(e) => this.setState({ text: e.target.value })} />
            <button onClick={() => this.props.add(Number(this.state.text))}>ADD</button>
        </div>;
    }
}
