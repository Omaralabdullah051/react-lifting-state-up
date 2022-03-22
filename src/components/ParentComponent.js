import React, { Component } from 'react';
import ClickHandler from './ClickHandler';
import HoverCounter from './HoverCounter';
class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }
    handleEvents = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    }
    render() {
        const { count } = this.state;
        return (
            <div>
                <ClickHandler count={count} handleEvents={this.handleEvents}></ClickHandler>
                <HoverCounter count={count} handleEvents={this.handleEvents}></HoverCounter>
            </div>
        );
    }
}

export default ParentComponent;