function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    var cantAnswer = "I can't hear you!";
    var yesAnswer = "YES INDEED!";
    var loveAnswer = "I would love to!";
    if (string === string.toLowerCase(string)) {
        return cantAnswer;
    }
    else if (string === string.toUpperCase(string)) {
        return yesAnswer;
    }
    else if (string === "Let's have dinner together!") {
        return loveAnswer;
    }
}