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
        img: 'https://eladbecker.github.io/portfolio/img/team/elad-becker-crop.jpg',
        description: [
            `Lorem Ipsum`,
            `Lorem Ipsum`,
            `Lorem Ipsum`,
        ],
        contacts: [
            { className: 'fab fa-facebook-square', url: 'https://www.facebook.com/elad.becker' },
            { className: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/elad-becker-13b4921a6/' },
            { className: 'fas fa-envelope-square', url: 'mailto:Becker.Elad@gmail.com' }
        ]
    },
];

function getAbouts() {
    return gAbouts;
}