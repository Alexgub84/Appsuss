'use strict';

export const notesService = {
    getAllNotes,
    getNoteById,
    updateTitle,
    getTitleById,
    togglePin,
    toggleTodo
};

const mockUpNotes = [
    {
        id: 'n101',
        type: "NoteText",
        title: "The meaning of life",
        isPinned: true,
        info: {
            txt: "the mice said it's 42"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        id: 'n102',
        type: "NoteImg",
        title: "When you search 'Alex Guberman' on Google you find...",
        isPinned: false,
        info: {
            url: "https://pbs.twimg.com/profile_images/819674377562324992/5U5xhfVi_400x400.jpg",
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        id: 'n103',
        type: "NoteTodos",
        title: "Today's Assignments:",
        isPinned: false,
        info: {
            todos: [
                { txt: "Eat", doneAt: null },
                { txt: "Sleep", doneAt: 187111111 },
                { txt: "Code", doneAt: null },
                { txt: "Repeat", doneAt: null }
            ]
        },
        style: {
            backgroundColor: "#00d"
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

function getNoteIdxById(noteId) {
    return gNotes.findIndex(note => note.id === noteId);
}

function updateTitle(noteId, newTitle) {
    const noteIdx = getNoteIdxById(noteId);
    gNotes[noteIdx] = { ...gNotes[noteIdx], title: newTitle };
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

