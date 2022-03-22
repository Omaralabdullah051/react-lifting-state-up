import React from "react";

class ClickHandler extends React.Component {
    render() {
        const { count, handleEvents } = this.props;
        return (
            <div>
                <button onClick={handleEvents} type="button">Click {count} times</button>
            </div>
        )
    }
}


export default ClickHandler;