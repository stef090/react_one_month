class PomodoroTimer extends React.Component
{   
    constructor()
    {
        super();
        this.state = 
        {
            timeElapsed: 0
        };
    }
    
    totalTime(workingTime, restingTime)
    {
        return workingTime + restingTime;
    }

    componentDidMount()
    {
        //console.log(new Date());
        this.interval = setInterval(this.elapseTime.bind(this),1000)
        this.setState({start: new Date()});
    }

    elapseTime()
    {
        var currentTime = new Date();
        var timeElapsed = new Date() - this.state.start;
        console.log(Math.floor(timeElapsed/1000));
        this.setState({timeElapsed:Math.floor(timeElapsed/1000)});

        if(this.state.timeElapsed >= this.props.workingTime * 60)
        {
            alert("Time is up!");
        }
        
    }

    render()
    {
        return (
            <div>This timer runs for {this.props.workingTime} minutes,
                followed by a rest period of {this.props.restingTime} minutes.
                Total time is {this.totalTime(this.props.workingTime, this.props.restingTime)} minutes.
                There are {this.state.timeElapsed} seconds elapsed.
            </div>
        )
    }
}


ReactDOM.render(
    <PomodoroTimer workingTime={25} restingTime={5}/>,
    document.getElementById('app')
);