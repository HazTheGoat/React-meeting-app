import React from 'react';

class MeetingCalculator extends React.Component{
    constructor(){
        super();
        this.calculate = this.calculate.bind(this);

        let meetingDurationInSeconds;
        let secondlyRate

        this.state = {
            accumulatedCost: 0
        }
    }

    componentWillMount(){
        this.meetingDurationInSeconds = this.props.meetingDurationInSeconds;
        this.secondlyRate = parseFloat(this.props.secondlyRate);
        this.calculate();
    }

    calculate(){
        let _this = this;
        let accumulatedCost = 0;

        setInterval(function(){
            _this.setState({ accumulatedCost: parseFloat(accumulatedCost += _this.secondlyRate).toFixed(2) })
        }, 1000)
    }

    render(){
        return(
            <div className="meeting-calculator-container">
                <div className="meeting-calculator">
                    <div className="calculator-label">This meeting costs:</div>
                    <div>
                    { this.state.accumulatedCost } <span className="calculator-currency">kr</span>
                    </div>
                </div>
                <p className="diffused">This meeting costs { parseFloat(this.props.secondlyRate).toFixed(2) },- per second, { parseInt(this.props.minuteRate) },- per minute and { parseInt(this.props.hourlyRate) },- per hour. This meeting has a total cost of { this.props.employeeRatesSum * this.props.meetingDurationInHours },-</p>
            </div>
            
        )
    }
}

export default MeetingCalculator;