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
        info: { url: `https://www.youtube.com/embed/tnFrdk3GPu0` },
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
        isPinned: false,
        info: {
            todos: [
                { txt: `Home`, doneAt: null },
                { txt: `Mail`, doneAt: 1598537519700 },
                { txt: `Keep`, doneAt: 1598537520698 },
                { txt: `Search`, doneAt: null }
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
        style: { backgroundColor: `#aaaaaa` }
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
        style: { backgroundColor: `#aaaaaa` }
    }
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




