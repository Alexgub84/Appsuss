'use strict';

export const aboutServcie = {
    getAbouts
}

const gAbouts = [
    {
        name: 'Elad Becker',
        title: 'Full-Stack Web Developer',
        img: 'https://eladbecker.github.io/portfolio/img/team/elad-becker-crop.jpg',
        description: [
            `IDF Maj. (ret.), 13 years of experience as in intelligence analyst officer and commander.`,
            `TAU 2016 M.A. alumni in diplomacy and national security studies.`,
            `Haifa University B.Sc. alumni in computer science and middle-eastern studies.`,
            `Misterbit © Coding Academy student (CaJul-2020).`,
            `Whisky enthusiast. And also coffee.`
        ],
        contacts: [
            { className: 'fab fa-facebook-square', url: 'https://www.facebook.com/elad.becker' },
            { className: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/elad-becker-13b4921a6/' },
            { className: 'fas fa-envelope-square', url: 'mailto:Becker.Elad@gmail.com' }
        ]
    },
    {
        name: 'Alex Guberman',
        title: 'Full-Stack Web Developer',
        img: 'assets/img/alex-guberman.jpg',
        description: [
            `My vision is to create  web application to make problems into solutions.`,
            `Expert in self-development coaching, especially in personal and team effectiveness.`,
            `Maj. (ret.), with 13 years of experience in the operational unit in the Air Force.`,
            `When I'm not coding, you'll find me cooking, running or lifting some weights in my Crossfit box.`,
        ],
        contacts: [
            { className: 'fab fa-facebook-square', url: 'https://www.facebook.com/alex.guberman.1/' },
            { className: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/alex-guberman-99181b51/' },
            { className: 'fas fa-envelope-square', url: 'mailto:alex.gub@gmail.com' }
        ]
    },
];

function getAbouts() {
    return gAbouts;
}