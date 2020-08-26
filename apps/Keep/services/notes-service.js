'use strict';

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
    toggleTodo
};

const mockUpNotes = [
    {
        id: 'n101',
        type: 'NoteText',
        title: 'The meaning of life',
        isPinned: true,
        info: {
            txt: 'the mice said it\'s 42'
        },
        style: {
            backgroundColor: '#555555'
        }
    },
    {
        id: 'n102',
        type: 'NoteImg',
        title: 'When you search \'Alex Guberman\' on Google you find...',
        isPinned: false,
        info: {
            url: 'https://pbs.twimg.com/profile_images/819674377562324992/5U5xhfVi_400x400.jpg',
        },
        style: {
            backgroundColor: '#aaaaaa'
        }
    },
    {
        id: 'n103',
        type: 'NoteTodos',
        title: 'Today\'s Assignments:',
        isPinned: false,
        info: {
            todos: [
                { txt: 'Eat', doneAt: null },
                { txt: 'Sleep', doneAt: 187111111 },
                { txt: 'Code', doneAt: null },
                { txt: 'Repeat', doneAt: null }
            ]
        },
        style: {
            backgroundColor: '#909090'
        }
    }
];
let gNotes;
_createNotes();

function getAllNotes() {
    return Promise.resolve(gNotes);
}

function getNoteById(noteId) {
    return gNotes.find(note => note.id === noteId);
}

function addNote(newNote) {
    console.log(newNote);
    gNotes = [...gNotes, newNote];
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


// ----------------

function _createNotes() {
    gNotes = loadFromStorage('NOTES');
    if (!gNotes) {
        gNotes = mockUpNotes;
        saveToStorage('NOTES', gNotes);
    }
}

