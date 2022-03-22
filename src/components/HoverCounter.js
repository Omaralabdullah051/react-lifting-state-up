import React, { Component } from "react";

class HoverCounter extends Component {
    render() {
        const { count, handleEvents } = this.props;
        return (
            <div>
                <h1 onMouseOver={handleEvents}>Hovered {count} times</h1>
            </div>
        )
    }
}

export default HoverCounter;