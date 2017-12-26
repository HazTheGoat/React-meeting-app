import React from 'react';
import Db from '../db';
import Meeting from './../Components/Meeting';

class MeetingList extends React.Component{
    render (){
        return(
            <div>
                <h1>Meeting list</h1>
                {
                    this.props.meetings.map(meeting => <Meeting updateMeeting={ this.props.updateMeeting } key={meeting.id} meeting={meeting} />)
                }
            </div>
        )
    }
}

export default MeetingList;