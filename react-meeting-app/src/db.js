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
                    name: "Johan Stenius",
                    rate: 1300,
                    phone: "97753497",
                    position: "Backend developer",
                    email: "johan.stenius@knowit.no",
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
                },
                {
                    id: 4,
                    name: "Peter Suneson",
                    rate: 1300,
                    phone: "93738041",
                    email: "peter.sunesond@knowit.no",
                    position: "Backend developer",
                    imgUrl: "http://i.dailymail.co.uk/i/pix/2016/05/23/22/348B850600000578-3605456-image-m-32_1464040491071.jpg"
                },
                {
                    id: 5,
                    name: "Lovisa Rönmark",
                    rate: 1100,
                    phone: "45716491",
                    email: "lovisa.ronmark@knowit.no",
                    position: "Project coordinator",
                    imgUrl: "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg"
                },
                {
                    id: 6,
                    name: "Vibeke Randby",
                    rate: 1300,
                    phone: "48712191",
                    email: "vibeke.randby@knowit.no",
                    position: "Backend developer",
                    imgUrl: "http://1.bp.blogspot.com/-DKzHkOGWzRI/VPdpSpkaApI/AAAAAAAAAP8/thGcMVC6qGI/s1600/Jason%2BDavis%2Bheadshot.jpg"
                },
                {
                    id: 7,
                    name: "Eirik Risnes",
                    rate: 1300,
                    phone: "98772191",
                    email: "eirik.risnes@knowit.no",
                    position: "Backend developer",
                    imgUrl: "http://blogs.cuit.columbia.edu/asj2122/files/2013/07/profile.jpg"
                },
                {
                    id: 8,
                    name: "Alexey Rytov",
                    rate: 1300,
                    phone: "91278591",
                    email: "alexey.rytov@knowit.no",
                    position: "Backend developer",
                    imgUrl: "https://www.newschool.edu/uploadedImages/Parsons/Profiles/jamer_hunt_profile.jpg?n=4468"
                },
                {
                    id: 10,
                    name: "Tonje Norheim",
                    rate: 1000,
                    phone: "99978491",
                    email: "tonje.norheim@yara.no",
                    position: "Project leader",
                    imgUrl: "http://wallpaper.pickywallpapers.com/1920x1080/mark-wahlberg-front-profile.jpg"
                },
                {
                    id: 11,
                    name: "Anastasia Granly",
                    rate: 1000,
                    phone: "92778191",
                    email: "anastasia.granly@yara.no",
                    position: "Project leader",
                    imgUrl: "http://devilsworkshop.org/files/2013/01/enlarged-facebook-profile-picture.jpg"
                }
            ],
            meetings: [
                {
                    id: 1,
                    title: "Yara - Estimating sprint 1",
                    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
                    startDate: "Fri Dec 29 2017 09:00:00 GMT+0100",
                    endTime: "Fri Dec 29 2017 16:00:00 GMT+0100",
                    attendees: [1]
                }, 
                {
                    id: 2,
                    title: "Interactive Crop Program",
                    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
                    startDate: "Fri Dec 30 2017 13:00:00 GMT+0100",
                    endTime: "Fri Dec 30 2017 15:30:00 GMT+0100",
                    attendees: [1, 2, 3,3,4,5,6,7,8,9,10,11]
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