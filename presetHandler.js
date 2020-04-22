// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (requestType, arrayIndex, newPresetArray) => {
    const returnArray = [];

    if (arrayIndex < 0 || arrayIndex >= presets.length) {
        returnArray.push(404);
    }
    else if (requestType !== 'GET' && requestType !== 'PUT') {
        returnArray.push(400);
    }
    else {
        returnArray.push(200)

        if (requestType === 'GET') {
            returnArray.push(presets[arrayIndex]);
        }
        else if (requestType === 'PUT' && newPresetArray instanceof Array) {
            presets[arrayIndex] = newPresetArray
            returnArray.push(newPresetArray);
        }
    }

    // console.log(`requestType: ${requestType}`);
    // console.log(`arrayIndex: ${arrayIndex}`);
    // console.log(`newPresetArray: ${newPresetArray}`);
    // console.log(returnArray);

    return returnArray;
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
