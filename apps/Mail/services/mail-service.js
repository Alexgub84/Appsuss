const KEY = 'emails'

var mails = [
    {
        id: "ac",
        subject: 'I miss you',
        body: `I want every single piece of you I want your heaven and your ocean's too Treat me soft but touch me cool I wanna teach you things you never knew, baby Bring the floor up to my knees Let me fall into your gravity And kiss me back to life to see Your body standing over me Baby don't let the lights go down Baby don't let the lights go down Baby don't let the lights go down Lights go down, lights go down Lights go down, lights go down Down, down, down, down I miss you when the lights go out It illuminates all of my doubts Pull me in, hold me tight Don't let go, baby give me light I miss you when the lights go out It illuminates all of my doubts Pull me in, hold me tight Don't let go, baby give me light I love the way your body moves Towards me from across the room Brushing past my every groove No one has me like you do, baby Bring your heart, I'll bring my soul But be delicate with my ego I wanna step into your great unknown With you and me setting the tone Baby don't let the lights go down Baby don't let the lights go down Baby don't let the lights go down Lights go down, lights go down Lights go down, lights go down Down, down, down, down I miss you when the lights go out It illuminates all of my doubts Pull me in, hold me tight Don't let go, baby give me light I miss you when the lights go out It illuminates all of my doubts Pull me in, hold me tight Don't let go, baby give me light We play so dirty in the dark 'Cause we are living worlds apart It only makes it harder baby It only makes it harder baby (harder baby) Harder baby (harder baby), harder baby I miss you when the lights go out It illuminates all of my doubts Pull me in, hold me tight Don't let go, baby give me light I miss you when the lights go out It illuminates all of my doubts Pull me in, hold me tight Don't let go, baby give me light I miss you, I miss you I miss you, I miss you I miss you, I miss you I miss you, I miss you`,
        fromName: 'Mirit',
        fromEmail: 'miriterez@gmail.com',
        isRead: true,
        isSent: false,
        isTrash: false,
        sentAt: 1589797298805
    },
    {
        id: makeId(),
        subject: 'In the end',
        body: `It starts with one thing I don't know why It doesn't even matter how hard you try Keep that in mind I designed this rhyme To explain in due time All I know Time is a valuable thing Watch it fly by as the pendulum swings Watch it count down to the end of the day The clock ticks life away It's so unreal Didn't look out below Watch the time go right out the window Trying to hold on, but you didn't even know Wasted it all just to watch you go I kept everything inside And even though I tried, it all fell apart What it meant to me Will eventually be a memory of a time when I tried so hard And got so far But in the end It doesn't even matter I had to fall To lose it all But in the end It doesn't even matter One thing, I don't know why It doesn't even matter how hard you try Keep that in mind I designed this rhyme To remind myself of a time when I tried so hard In spite of the way you were mocking me Acting like I was part of your property Remembering all the times you fought with me I'm surprised it got so Things aren't the way they were before You wouldn't even recognize me anymore Not that you knew me back then But it all comes back to me in the end You kept everything inside And even though I tried, it all fell apart What it meant to me will eventually be a memory of a time when I tried so hard And got so far But in the end It doesn't even matter I had to fall To lose it all But in the end It doesn't even matter I've put my trust in you Pushed as far as I can go For all this There's only one thing you should know I've put my trust in you Pushed as far as I can go For all this There's only one thing you should know I tried so hard And got so far But in the end It doesn't even matter I had to fall To lose it all But in the end It doesn't even matter`,
        fromName: 'Chester Bennington ',
        fromEmail: 'chesterbenn@gmail.com',
        isRead: false,
        sentAt: 1589797268700
    },
    {
        id: makeId(),
        subject: 'Welcome to the Hall of fame',
        body: `Yeah, you could be the greatest You can be the best You can be the King Kong banging on your chest You could beat the world You could beat the war You could talk to God, go banging on his door You can throw your hands up You can beat the clock You can move a mountain You can break rocks You can be a master Don't wait for luck Dedicate yourself and you can find yourself Standing in the hall of fame And the world's gonna know your name 'Cause you burn with the brightest flame And the world's gonna know your name And you'll be on the walls of the hall of fame You could go the distance You could run the mile You could walk straight through hell with a smile You could be the hero You could get the gold Breaking all the records that thought, never could be broke Do it for your people Do it for your pride How you ever gonna know if you never even try? Do it for your country Do it for you name 'Cause there's gonna be a day When your, standing in the hall of fame And the world's gonna know your name 'Cause you burn with the brightest flame And the world's gonna know your name And you'll be on the walls of the hall of fame Be a champion, be a champion, be a champion, be a champion On the walls of the hall of fame Be students, be teachers Be politicians, be preachers Be believers, be leaders Be astronauts Be champions Be truth seekers Be students, be teachers Be politicians, be preachers Be believers, be leaders Be astronauts, be champions Standing in the hall of fame And the world's gonna know your name 'Cause you burn with the brightest flame And the world's gonna know your name And you'll be on the walls of the hall of fame You could be the greatest, you can be the best (You can be a champion)You can be the King Kong banging on your chest You could beat the world (you can be a champion) You could beat the war (you can be a champion) You could talk to God, go banging on his door (you can be a champion) You can throw your hands up (you can be a champion) You can beat the clock (you can be a champion) You can move a mountain (you can be a champion) You can break rocks (you can be a champion) You can be a master (you can be a champion) Don't wait for luck (you can be a champion) Dedicate yourself and you can find yourself (you can be a champion) Standing in the hall of fame (you can be a champion)`,
        fromName: 'The Script',
        fromEmail: 'thescript@gmail.com',
        isRead: false,
        sentAt: 1589797248700
    },
]
let gFilterBy = '';

export const MailService = {
    query,
    toggleReadById,
    toggleTrashById,
    addNewMail,
    deleteMail,
    getMailById
}

function query() {
    const mailFromSt = loadFromStorage(KEY);
    if (mailFromSt) mails = mailFromSt
    return Promise.resolve(mails)
}

function getMailById(id) {
    const idx = mails.findIndex((mail) => mail.id === id);
    return mails[idx];
}

function toggleReadById(id) {
    let mail = getMailById(id);
    mail.isRead = true;
    saveToStorage(KEY, mails)
}

function toggleTrashById(id) {
    let mail = getMailById(id);
    mail.isTrash = true;
    saveToStorage(KEY, mails)
}

function addNewMail(mail) {
    mails.push(mail);
    saveToStorage(KEY, mails)
}

function deleteMail(id){
    const idx = mails.findIndex((mail) => mail.id === id);
    mails.splice(idx,1);
    saveToStorage(KEY, mails)

}
