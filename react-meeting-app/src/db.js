class Db {
    static getEmployees(){
        return [
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
        ]
    }

    static getMeetings(){
        return [
            {
                id: 1,
                title: "Yara - Estimating sprint 1",
                description: "some description",
                attendees: [1,2]
            },
            {
                id: 2,
                title: "Interactive Crop Program",
                description: "some description some description",
                attendees: [1,2,3]
            }
        ]
    }
}

export default Db;