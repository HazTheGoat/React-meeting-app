import React from 'react';
import Db from './../db';
import moment from 'moment';
import MeetingCalculator from './../Components/MeetingCalculator';
import jQuery from 'jquery';
import { Route, Link } from 'react-router-dom';

class MeetingPage extends React.Component {
    constructor() {
        super();
        let meetingId = '';
        let meetingsList = [];
        let currentMeeting = {};
        let attendeesInMeeting = [];
        let startDate;
        let endDate;
        let meetingDuration;
        let meetingDurationInMinutes;
        let meetingDurationInSeconds;
        let secondlyRate;
        let minuteRate;
        let hourlyRate;
        let employeeRatesSum;
        this.getCurrentMeeting = this.getCurrentMeeting.bind(this);
        this.getMeetingAttendees = this.getMeetingAttendees.bind(this);
        this.hideElement = this.hideElement.bind(this);
    }

    componentWillMount() {
        this.meetingId = this.props.match.params.id;
        this.meetingsList = this.props.meetings;
        this.employeesList = this.props.employees;
        this.getCurrentMeeting();
        this.getMeetingAttendees();
        this.startDate = moment(this.currentMeeting.startDate);
        this.endDate = moment(this.currentMeeting.endTime);
        let duration = moment.duration(moment(this.currentMeeting.endTime).diff(moment(this.currentMeeting.startDate)));
        this.meetingDurationInHours = duration.asHours();
        this.meetingDurationInSeconds = duration.asSeconds();
        let employeeRates = this.attendeesInMeeting.map(e => parseInt(e.rate));
        this.employeeRatesSum = employeeRates.reduce((total, rate) => {
            return total += rate;
        }, 0);

        this.hourlyRate = this.employeeRatesSum;
        this.minuteRate = this.hourlyRate / 60;
        this.secondlyRate = this.minuteRate / 60;
    }

    hideElement(e){
        jQuery('html, body').animate({
            scrollTop: jQuery(".js-start-meeting").offset().top
        }, 1000);
        jQuery('.js-start-meeting').hide();
    }

    getCurrentMeeting(){
        this.currentMeeting = this
        .meetingsList
        .find(x => x.id == this.meetingId);
    }

    getMeetingAttendees(){
        this.attendeesInMeeting = this.employeesList.filter(employee => {
            // this.currentMeeting.attendees
            if(this.currentMeeting.attendees.includes(employee.id))
                return true;

            return false;
        })
    }

    render() {
        return (
            <div className="meeting-page">
                <div className="title-container">
                    <h1>{this.currentMeeting.title }</h1>
                    <p>{this.currentMeeting.description }</p>
                    <div className="diffused">
                        START: { this.startDate.format("D MMM YYYY HH:MM") }
                    </div>
                    <div className="diffused">
                        END: { this.endDate.format("D MMM YYYY HH:MM") }
                    </div>
                    <div className="diffused">
                        DURATION: { this.meetingDurationInHours } hours
                    </div>
                </div>
                <Link className="js-start-meeting mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" to={`/meeting/${this.currentMeeting.id}/start`} onClick={ this.hideElement }>
                    Start the meeting
                </Link>
                <Route path={`/meeting/:id/start`} render={props => <MeetingCalculator {...props} meetingInSeconds={ this.meetingDurationInSeconds } secondlyRate={ this.secondlyRate } minuteRate={ this.minuteRate } hourlyRate={ this.hourlyRate } employeeRatesSum={ this.employeeRatesSum } meetingDurationInHours={ this.meetingDurationInHours }/>}/>                
                <h4>Attendees</h4>
                <table
                    className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
                    <thead>
                        <tr>
                            <th className="mdl-data-table__cell--non-numeric"></th>
                            <th className="mdl-data-table__cell--non-numeric">Name</th>
                            <th>Position</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.attendeesInMeeting.map(attendee => {
                                return(
                                    <tr key={attendee.id}>
                                        <td>
                                            <img className="table-avatar" src={ attendee.imgUrl } alt=""/>
                                        </td>
                                        <td className="mdl-data-table__cell--non-numeric">{ attendee.name }</td>
                                        <td>{ attendee.position }</td>
                                        <td>{ attendee.phone }</td>
                                        <td>{ attendee.email }</td>
                                        <td>{ attendee.rate },-</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MeetingPage;