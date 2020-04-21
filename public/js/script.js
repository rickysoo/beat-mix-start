// Drum Arrays
const kicks = new Array(16).fill(false);
const snares = new Array(16).fill(false);
const hiHats = new Array(16).fill(false);
const rideCymbals = new Array(16).fill(false);

function getArrayByName(arrayName) {
    switch (arrayName) {
        case 'kicks':
            return kicks;
        case 'snares':
            return snares;
        case 'hiHats':
            return hiHats;
        case 'rideCymbals':
            return rideCymbals;
        default:
            return undefined;
    }
}

function toggleDrum(arrayName, index) {


    if (arrayName === undefined || index === undefined) {
        return;
    }

    array = getArrayByName(arrayName);

    if (arrayName === undefined || index < 0 || index > array.length) {
        return;
    }

    array[index] = !array[index];
}

function clear(arrayName) {
    if (arrayName === undefined) {
        return;
    }

    array = getArrayByName(arrayName);

    if (array === undefined) {
        return;
    }

    array.fill(false);
}

function invert(arrayName) {
    if (arrayName === undefined) {
        return;
    }

    array = getArrayByName(arrayName);

    if (array === undefined) {
        return;
    }

    for (i = 0; i < array.length; i++) {
        array[i] = !array[i];
    }
}

// console.log(`Before: ${kicks}`);
// toggleDrum('kicks', 0);
// console.log(`After: ${kicks}`);
