'use strict';
import { MailService } from '../../Mail/services/mail-service.js'
export const notesService = {
    getAllNotes,
    getNoteById,
    updateTitle,
    getTitleById,
    togglePin,
    removeNote,
    addNote,
    updateStyle,
    updateText,
    toggleTodo,
    addNewTodo,
    removeTodo,
    createNoteFromMail,
    notesQuery
};

const mockUpNotes = [
    {
        id: `n101`,
        type: `NoteText`,
        title: `The meaning of life`,
        isPinned: false,
        info: { txt: `the mice said it's 42` },
        style: { backgroundColor: `#fbbc04` }
    },
    {
        id: `n102`,
        type: `NoteImg`,
        title: `When you search 'Alex Guberman' on Google you find...`,
        isPinned: false,
        info: { url: `https://pbs.twimg.com/profile_images/819674377562324992/5U5xhfVi_400x400.jpg` },
        style: { backgroundColor: `#ccff90` }
    },
    {
        id: `n103`,
        type: `NoteTodos`,
        title: `Today's Assignments:`,
        isPinned: true,
        info: {
            todos: [
                { txt: `Eat`, doneAt: null },
                { txt: `Sleep`, doneAt: 187111111 },
                { txt: `Code`, doneAt: null },
                { txt: `Repeat`, doneAt: null }
            ]
        },
        style: { backgroundColor: `#e6c9a8` }
    },
    {
        id: `2BiiN`,
        type: `NoteVideo`,
        title: `באים להרים לי`,
        isPinned: true,
        info: { url: `https://www.youtube.com/embed/I9xBb3MDxgk` },
        style: { backgroundColor: `#f28b82` }
    },
    {
        id: `z2SWg`,
        type: `NoteImg`,
        title: `Meow`,
        isPinned: true,
        info: { url: `https://i.kym-cdn.com/photos/images/newsfeed/001/439/881/ed5.png` },
        style: { backgroundColor: `#fff475` }
    },
    {
        id: `tNuOv`,
        type: `NoteTodos`,
        title: `Title...`,
        isPinned: true,
        info: {
            todos: [
                { txt: `Home`, doneAt: 1598537520698 },
                { txt: `Mail`, doneAt: 1598537519700 },
                { txt: `Keep`, doneAt: 1598537520698 },
                { txt: `About`, doneAt: 1598537520698 },
                { txt: `Responsive Design`, doneAt: 1598537520698 },
                { txt: `Search`, doneAt: 1598537520698 }
            ]
        },
        style: { backgroundColor: `#e8eaed` }
    },
    {
        id: `BrLJW`,
        type: `NoteText`,
        title: `Eek, blast of cold air coming out of that box.`,
        isPinned: false,
        info: { txt: `Title of your sex tap` },
        style: { backgroundColor: `#e8eaed` }
    },
    {
        id: `koPwv`,
        type: `NoteVideo`,
        title: `Petrucci's new album!`,
        isPinned: true,
        info: { url: `https://www.youtube.com/embed/VjahLtBeElE` },
        style: { backgroundColor: `#d7aefb` }
    },
    {
        id: `a4uqo`,
        type: `NoteText`,
        title: `The meaning of life`,
        isPinned: false,
        info: { txt: `The mice said it's 42` },
        style: { backgroundColor: `#e8eaed` }
    },
    {
        id: `n110`,
        type: `NoteImg`,
        title: `Amazing Ant`,
        isPinned: false,
        info: { url: `https://lh3.googleusercontent.com/proxy/77Hfl50ZfEb3_-pP7rAYR4J2w5wCdElM1NxMaqHEbaLTe8frR28JMq7fzL8Es0ifCNielozU5bsvZ7FDQuJ2iPPpBS4X0TjR8IzsmRzz8Zgcxk2dXGAIstWV2A85R7Ve9ljCwfEcRPZWwcNrTKR294_iB4EFNaXO7yVT5jsD-jo5_kCVdIRQEtmf9NeWFzk` },
        style: { backgroundColor: `#e8eaed` }
    },
    {
        id: `n111`,
        type: `NoteImg`,
        title: `Stereogram`,
        isPinned: false,
        info: { url: `https://i.imgur.com/Li3WYz4.jpg` },
        style: { backgroundColor: `#e8eaed` }
    },
    {
        id: `n112`,
        type: `NoteImg`,
        title: `אשתי ואני ופריז`,
        isPinned: true,
        info: { url: `https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.0-9/74675014_10157774063237299_5826641384957804544_o.jpg?_nc_cat=104&_nc_sid=8bfeb9&_nc_ohc=_-K6f6NnvhQAX-3M09w&_nc_ht=scontent.fhfa2-2.fna&oh=d318f9930798104c909e821f8e7daf0c&oe=5F6FB2AD` },
        style: { backgroundColor: `#e8eaed` }
    },
    {
        id: `n120`,
        type: `NoteText`,
        title: `Inspirational quote:`,
        isPinned: false,
        info: { txt: `"Thinking: the talking of the soul with itself" - Plato.` },
        style: { backgroundColor: `#e8eaed` }
    },
    {
        id: `n121`,
        type: `NoteText`,
        title: `"The Old Pond" by Matsuo Bashō`,
        isPinned: true,
        info: { txt: `An old silent pond \n A frog jumps into the pond— \n Splash! Silence again.` },
        style: { backgroundColor: `#e8eaed` }
    },
    {
        id: `n122`,
        type: `NoteText`,
        title: `Algorithm / Muse`,
        isPinned: false,
        info: {
            txt: `[Verse 1]\n
        Burn like a slave\n
        Churn like a cog\n
        We are caged in simulations\n
        Algorithms evolve\n
        Push us aside and render us obsolete\n
        \n
        [Chorus]\n
        This means war\n
        With your creator\n
        This means war\n
        With your creator\n
        \n
        [Bridge]\n
        Reload, crash out\n
        \n
        [Chorus]\n
        This means war\n
        With your creator\n
        This means war\n
        With your creator` },
        style: { backgroundColor: `#e8eaed` }
    },
    {
        id: `n4012`,
        type: `NoteImg`,
        title: `Pika Pika!`,
        isPinned: true,
        info: { url: `https://thumbs.gfycat.com/BlackOffbeatBufeo-size_restricted.gif` },
        style: { backgroundColor: `#e8eaed` }
    },
    {
        id: `n222`,
        type: `NoteVideo`,
        title: `Linkin Park - Crawling (live feat. Chris Cornell)`,
        isPinned: false,
        info: { url: `https://www.youtube.com/embed/sAOLJVsk9mA` },
        style: { backgroundColor: `#e8eaed` }
    },
    {
        id: `n333`,
        type: `NoteVideo`,
        title: `React Crash Course`,
        isPinned: false,
        info: { url: `https://www.youtube.com/embed/sBws8MSXN7A` },
        style: { backgroundColor: `#e8eaed` }
    },
    {
        id: `n444`,
        type: `NoteVideo`,
        title: `Margaret Gould Stewart: How giant websites design for you (and a billion others, too)`,
        isPinned: true,
        info: { url: `https://www.youtube.com/embed/quJdL9ggETI` },
        style: { backgroundColor: `#e8eaed` }
    },
    {
        id: `n9999`,
        type: `NoteTodos`,
        title: `Today's to-do list`,
        isPinned: true,
        info: {
            todos: [
                { txt: `Make a   to-do list`, doneAt: null },
                { txt: `Check off the first item`, doneAt: null },
                { txt: `Realize you already did 2 things on the llist`, doneAt: null },
                { txt: `Reward yourself with a nice, long nap`, doneAt: 1598537520698 }
            ]
        },
        style: { backgroundColor: `#e8eaed` }
    },
];

let gNotes;
_createNotes();

function getAllNotes() {
    return Promise.resolve(gNotes);
}

function getNoteById(noteId) {
    console.log(gNotes);
    const note = gNotes.find(note => note.id === noteId)
    console.log(note);
    return gNotes.find(note => note.id === noteId);
}

function addNote(newNote) {
    gNotes = [newNote, ...gNotes];
    saveToStorage('NOTES', gNotes);
}

function getNoteIdxById(noteId) {
    return gNotes.findIndex(note => note.id === noteId);
}

function removeNote(noteId) {
    const noteIdx = getNoteIdxById(noteId);
    gNotes = [...gNotes.slice(0, noteIdx), ...gNotes.slice(noteIdx + 1)];
    saveToStorage('NOTES', gNotes);
}

function togglePin(noteId) {
    const noteIdx = getNoteIdxById(noteId);
    gNotes[noteIdx].isPinned = !gNotes[noteIdx].isPinned;
    saveToStorage('NOTES', gNotes);
}

function getTitleById(noteId) {
    return gNotes.find(note => {
        if (note.id === noteId) return note.title;
    });
}

function updateStyle(noteId, newStyle) {
    const noteIdx = getNoteIdxById(noteId);
    gNotes[noteIdx].style = newStyle;
    saveToStorage('NOTES', gNotes);
}

function updateTitle(noteId, newTitle) {
    const noteIdx = getNoteIdxById(noteId);
    gNotes[noteIdx] = { ...gNotes[noteIdx], title: newTitle };
    saveToStorage('NOTES', gNotes);
}

function updateText(noteId, newText) {
    const noteIdx = getNoteIdxById(noteId);
    gNotes[noteIdx].info.txt = newText;
    saveToStorage('NOTES', gNotes);
}

function toggleTodo(noteId, todoIdx) {
    const noteIdx = getNoteIdxById(noteId);
    gNotes[noteIdx].info.todos[todoIdx].doneAt = (gNotes[noteIdx].info.todos[todoIdx].doneAt) ? null : Date.now();
    saveToStorage('NOTES', gNotes);
}

function addNewTodo(noteId, newTodo) {
    const noteIdx = getNoteIdxById(noteId);
    gNotes[noteIdx].info.todos.push(newTodo);
    saveToStorage('NOTES', gNotes);
}

function removeTodo(noteId, todoIdx) {
    const noteIdx = getNoteIdxById(noteId);
    gNotes[noteIdx].info.todos.splice(todoIdx, 1);
    saveToStorage('NOTES', gNotes);
}

function createNoteFromMail(mailId) {
    const mail = MailService.getMailById(mailId);
    const mailTxt = `from: ${mail.fromName} (${mail.fromEmail}) \n\n ${mail.body}`
    const newNote = {
        id: makeId(),
        type: `NoteText`,
        title: mail.subject,
        isPinned: false,
        info: { txt: mailTxt },
        style: { backgroundColor: `#aaaaaa` }
    }
    addNote(newNote);
}

function notesQuery(searchStr) {
    if (searchStr === '' || searchStr === null) return null;
    const filteredNotes = gNotes.filter(note => {
        return note.title.toLowerCase().includes(searchStr.toLowerCase())
            || (note.info.txt && note.info.txt.toLowerCase().includes(searchStr.toLowerCase()))
            || (note.info.url && note.info.url.toLowerCase().includes(searchStr.toLowerCase()))
            || (note.info.todos && note.info.todos.some(todo => {
                return todo.txt.toLowerCase().includes(searchStr.toLowerCase());
            }))
    });
    return filteredNotes;
}

// ----------------

function _createNotes() {
    gNotes = loadFromStorage('NOTES');
    if (!gNotes) {
        gNotes = mockUpNotes;
        saveToStorage('NOTES', gNotes);
    }
}




