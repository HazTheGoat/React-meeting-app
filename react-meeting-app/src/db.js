class Db {
    static setLocalStorage() {
        let state = {
            employees: [
                {
                    id: 1,
                    name: "Hazar Askari",
                    rate: 1200,
                    position: "Frontend developer",
                    phone: "91990860",
                    email: "hazar.askari@knowit.no",
                    imgUrl: "http://www.claimcash.in/cadmin/uploads/stores/pro.jpg"
                }, 
                {
                    id: 2,
                    name: "Yelitza Yaramillo",
                    rate: 1300,
                    phone: "97753497",
                    position: "Backend developer",
                    email: "yelitza.yaramillo@knowit.no",
                    imgUrl: "https://d1jiktx90t87hr.cloudfront.net/223/wp-content/uploads/2016/09/michelle-prince-profile-img.png"
                }, 
                {
                    id: 3,
                    name: "Anita Nygård",
                    rate: 1000,
                    phone: "96738491",
                    email: "anita.nygaard@knowit.no",
                    position: "Project leader",
                    imgUrl: "https://www.historicacanada.ca/sites/default/files/staff_davida_detail_0.png"
                }
            ],
            meetings: [
                {
                    id: 1,
                    title: "Yara - Estimating sprint 1",
                    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
                    attendees: [1]
                }, 
                {
                    id: 2,
                    title: "Interactive Crop Program",
                    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
                    attendees: [1, 2, 3]
                }
            ]
        }
        
        //if(!localStorage.getItem('react-meeting-app'))
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