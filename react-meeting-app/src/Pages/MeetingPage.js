import React from 'react';
import Db from './../db';

class MeetingPage extends React.Component {
    constructor() {
        super();
        let meetingId = '';
        let meetingsList = [];
        let currentMeeting = {};
        let employeesInMeeting = [];
    }

    componentWillMount() {
        this.meetingId = this.props.match.params.id;
        this.meetingsList = this.props.meetings;
        this.currentMeeting = this
            .meetingsList
            .find(x => x.id == this.meetingId);
    }

    render() {
        return (
            <div>
                <h1>{this.currentMeeting.title}</h1>
                <p>{this.currentMeeting.description}</p>

                <h3>Attendees:</h3>
                <table
                    class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
                    <thead>
                        <tr>
                            <th class="mdl-data-table__cell--non-numeric"></th>
                            <th class="mdl-data-table__cell--non-numeric">Name</th>
                            <th>Position</th>
                            <th>Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td class="mdl-data-table__cell--non-numeric">Acrylic (Transparent)</td>
                            <td>25</td>
                            <td>$2.90</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td class="mdl-data-table__cell--non-numeric">Plywood (Birch)</td>
                            <td>50</td>
                            <td>$1.25</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td class="mdl-data-table__cell--non-numeric">Laminate (Gold on Blue)</td>
                            <td>10</td>
                            <td>$2.35</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MeetingPage;