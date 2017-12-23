import React from 'react';

class Meeting extends React.Component {
    render() {
        return (
            <div>
                <h2>Estimation meeting - Yara Connections</h2>
                <ul class="demo-list-three mdl-list">
                    <li class="mdl-list__item mdl-list__item--three-line">
                        <span class="mdl-list__item-primary-content">
                            <i class="material-icons mdl-list__item-avatar">person</i>
                            <span>Bryan Cranston</span>
                            <span class="mdl-list__item-text-body">
                                Bryan Cranston played the role of Walter in Breaking Bad. He is also known for
                                playing Hal in Malcom in the Middle.
                            </span>
                        </span>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Meeting;