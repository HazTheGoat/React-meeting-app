class Db {
    static setLocalStorage() {
        let state = {
            employees: [
                {
                    id: 1,
                    name: "Hazar Askari",
                    rate: 1200,
                    position: "Frontend developer",
                    imgUrl: "http://placehold.it/200x200"
                }, 
                {
                    id: 2,
                    name: "Yelitza Yaramillo",
                    rate: 1300,
                    position: "Backend developer",
                    imgUrl: "http://placehold.it/200x200"
                }, 
                {
                    id: 3,
                    name: "Anita Nygård",
                    rate: 1000,
                    position: "Project leader",
                    imgUrl: "http://placehold.it/200x200"
                }
            ],
            meetings: [
                {
                    id: 1,
                    title: "Yara - Estimating sprint 1",
                    description: "some description",
                    attendees: [1, 2]
                }, 
                {
                    id: 2,
                    title: "Interactive Crop Program",
                    description: "some description some description",
                    attendees: [1, 2, 3]
                }
            ]
        }

        if(!localStorage.getItem('react-meeting-app'))
            localStorage.setItem('react-meeting-app', JSON.stringify(state))
    }

    static getEmployees() {
        return JSON.parse(localStorage.getItem('react-meeting-app'));
    }

    static getMeetings() {
        return JSON.parse(localStorage.getItem('react-meeting-app'));
    }
}

export default Db;