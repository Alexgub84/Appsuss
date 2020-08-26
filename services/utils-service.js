
// export const UtilsService={
//     getIntNotInc,
//     makeId
// }


function getIntNotInc(min = 0, max = 10) {
    return Math.floor(Math.random() * (max - min) + min);
}


function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}
