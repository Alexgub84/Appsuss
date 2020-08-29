const KEY = 'emails'

var mails = [
    {
        id: makeId(),
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
        fromName: 'Chester ',
        fromEmail: 'chesterbenn@gmail.com',
        isRead: false,
        isSent: false,
        isTrash: false,
        sentAt: 1589797268700
    },
    {
        id: makeId(),
        subject: 'Welcome to the Hall of fame',
        body: `Yeah, you could be the greatest You can be the best You can be the King Kong banging on your chest You could beat the world You could beat the war You could talk to God, go banging on his door You can throw your hands up You can beat the clock You can move a mountain You can break rocks You can be a master Don't wait for luck Dedicate yourself and you can find yourself Standing in the hall of fame And the world's gonna know your name 'Cause you burn with the brightest flame And the world's gonna know your name And you'll be on the walls of the hall of fame You could go the distance You could run the mile You could walk straight through hell with a smile You could be the hero You could get the gold Breaking all the records that thought, never could be broke Do it for your people Do it for your pride How you ever gonna know if you never even try? Do it for your country Do it for you name 'Cause there's gonna be a day When your, standing in the hall of fame And the world's gonna know your name 'Cause you burn with the brightest flame And the world's gonna know your name And you'll be on the walls of the hall of fame Be a champion, be a champion, be a champion, be a champion On the walls of the hall of fame Be students, be teachers Be politicians, be preachers Be believers, be leaders Be astronauts Be champions Be truth seekers Be students, be teachers Be politicians, be preachers Be believers, be leaders Be astronauts, be champions Standing in the hall of fame And the world's gonna know your name 'Cause you burn with the brightest flame And the world's gonna know your name And you'll be on the walls of the hall of fame You could be the greatest, you can be the best (You can be a champion)You can be the King Kong banging on your chest You could beat the world (you can be a champion) You could beat the war (you can be a champion) You could talk to God, go banging on his door (you can be a champion) You can throw your hands up (you can be a champion) You can beat the clock (you can be a champion) You can move a mountain (you can be a champion) You can break rocks (you can be a champion) You can be a master (you can be a champion) Don't wait for luck (you can be a champion) Dedicate yourself and you can find yourself (you can be a champion) Standing in the hall of fame (you can be a champion)`,
        fromName: 'The Script',
        fromEmail: 'thescript@gmail.com',
        isRead: true,
        isSent: true,
        isTrash: false,
        sentAt: 1589797248700
    },
    {
        id: makeId(),
        subject: 'Mama, just killed a man',
        body: `Mama, just killed a man Put a gun against his head Pulled my trigger, now he's dead Mama, life had just begun But now I've gone and thrown it all away Mama, ooh Didn't mean to make you cry If I'm not back again this time tomorrow Carry on, carry on As if nothing really matters Too late, my time has come Sends shivers down my spine Body's aching all the time Goodbye everybody, I've got to go Gotta leave you all behind and face the truth Mama, ooh I don't want to die I sometimes wish I'd never been born at all`,
        fromName: 'Quenn',
        fromEmail: 'quenn@gmail.com',
        isRead: true,
        isSent: false,
        isTrash: false,
        sentAt: 1579797148700
    },
    {
        id: makeId(),
        subject: 'Viva la Vida',
        body: `I used to rule the world Seas would rise when I gave the word Now in the morning, I sleep alone Sweep the streets I used to own I used to roll the dice Feel the fear in my enemy's eyes Listen as the crowd would sing Now the old king is dead! Long live the king! One minute I held the key Next the walls were closed on me And I discovered that my castles stand Upon pillars of salt and pillars of sand I hear Jerusalem bells are ringing Roman Cavalry choirs are singing Be my mirror, my sword and shield My missionaries in a foreign field For some reason I can't explain Once you go there was never, never an honest word And that was when I ruled the world It was a wicked and wild wind Blew down the doors to let me in Shattered windows and the sound of drums People couldn't believe what I'd become Revolutionaries wait For my head on a silver plate Just a puppet on a lonely string Oh, who would ever want to be king? I hear Jerusalem bells are ringing Roman Calvary choirs are singing Be my mirror, my sword and shield My missionaries in a foreign field For some reason I can't explain I know Saint Peter won't call my name Never an honest word But that was when I ruled the world`,
        fromName: 'Coldplay',
        fromEmail: 'coldplay@gmail.com',
        isRead: true,
        isSent: false,
        isTrash: false,
        sentAt: 1579797142700
    },
    {
        id: makeId(),
        subject: 'Human',
        body: `I did my best to notice When the call came down the line Up to the platform of surrender I was broad but I was kind And sometimes I get nervous When I see an open door Close your eyes Clear your heart Cut the cord Are we human? Or are we dancer? My sign is vital My hands are cold And I'm on my knees Looking for the answer Are we human? Or are we dancer? Pay my respects to grace and virtue Send my condolences to good Give my regards to soul and romance They always did the best they could And so long to devotion You taught me everything I know Wave goodbye Wish me well You got to let me go Are we human? Or are we dancer? My sign is vital My hands are cold And I'm on my knees Looking for the answer Are we human? Or are we dancer? Will your system be alright When you dream of home tonight? There is no message we're receiving Let me know is your heart still beating? Are we human? Or are we dancer? My sign is vital My hands are cold And I'm on my knees Looking for the answer You got to let me know Are we human? Or are we dancer? My sign is vital My hands are cold And I'm on my knees Looking for the answer Are we human? Or are we dancer? Are we human? Or are we dancer? Are we human Or are we dancer?`,
        fromName: 'Killers',
        fromEmail: 'ckilers@gmail.com',
        isRead: true,
        isSent: false,
        isTrash: true,
        sentAt: 1579797232700
    }
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
