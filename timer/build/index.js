class PomodoroTimer extends React.Component {
    constructor() {
        super();
        this.state = {
            timeElapsed: 0,
            timeLeft: 0
        };
    }

    totalTime(workingTime, restingTime) {
        return workingTime + restingTime;
    }

    componentDidMount() {
        //console.log(new Date());
        this.interval = setInterval(this.elapseTime.bind(this), 1000);
        this.setState({ start: new Date() });
    }

    componentWillUnmount()
    {
        clearInterval(this.interval);
    }

    elapseTime() {
        var currentTime = new Date();
        var timeElapsed = new Date() - this.state.start;
        console.log(Math.floor(timeElapsed / 1000));
        timeElapsed = Math.floor(timeElapsed / 1000);
        this.setState({ timeElapsed: timeElapsed });
        var timeLeft = (this.props.workingTime * 60) - timeElapsed;
        this.setState({ timeLeft: timeLeft });

    }

    render() {
        return React.createElement(
            "div",
            null,
            "This timer runs for ",
            this.props.workingTime,
            " minutes, followed by a rest period of ",
            this.props.restingTime,
            " minutes. Total time is ",
            this.totalTime(this.props.workingTime, this.props.restingTime),
            " minutes. There are ",
            this.state.timeLeft,
            " seconds left."
        );
    }
}

ReactDOM.render(React.createElement(PomodoroTimer, { workingTime: 25, restingTime: 5 }), document.getElementById('app'));