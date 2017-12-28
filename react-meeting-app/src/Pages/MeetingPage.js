import React from 'react';
import Db from './../db';

class MeetingPage extends React.Component {
    constructor() {
        super();
        let meetingId = '';
        let meetingsList = [];
        let currentMeeting = {};
        let attendeesInMeeting = [];

        this.getCurrentMeeting = this.getCurrentMeeting.bind(this);
        this.getMeetingAttendees = this.getMeetingAttendees.bind(this);
    }

    componentWillMount() {
        this.meetingId = this.props.match.params.id;
        this.meetingsList = this.props.meetings;
        this.employeesList = this.props.employees;
        
        this.getCurrentMeeting();
        this.getMeetingAttendees();
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
                    <h1>{this.currentMeeting.title}</h1>
                    <p>{this.currentMeeting.description}</p>
                </div>
                <br/><br/>
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
                                            <img className="table-avatar" src={attendee.imgUrl} alt=""/>
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