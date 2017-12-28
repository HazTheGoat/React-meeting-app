import React from 'react';
import Meeting from './../Components/Meeting';

class MeetingList extends React.Component{
    render (){
        return(
            <div>
                <div className="title-container">
                    <h1>Meeting list</h1>
                </div>
                {
                    this.props.meetings.map(meeting => <Meeting key={meeting.id} meeting={meeting} />)
                }
            </div>
        )
    }
}

export default MeetingList;