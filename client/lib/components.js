class StoryBox extends React.Component {
    render() {
        const now = Date();

        return React.createElement(
            "div",
            null,
            React.createElement(
                "h3",
                null,
                "Stories"
            ),
            React.createElement(
                "p",
                { className: "lead" },
                "Current time: ",
                now.toTimeString()
            )
        );
    }
}

ReactDOM.render(React.createElement(StoryBox, null), document.getElementById('story-app'));