function generateGroups() {
    let participantsText = document.getElementById("participants").value;
    let groupSize = parseInt(document.getElementById("groupSize").value);
    let participants = participantsText.split('\n').filter(participant => participant.trim() !== '');

    if (participants.length === 0 || isNaN(groupSize) || groupSize <= 0) {
        alert("Please enter valid input.");
        return;
    }

    let shuffledParticipants = shuffleArray(participants);
    let numGroups = Math.ceil(participants.length / groupSize);
    let groups = [];

    for (let i = 0; i < numGroups; i++) {
        groups.push(shuffledParticipants.slice(i * groupSize, (i + 1) * groupSize));
    }

    displayGroups(groups);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function displayGroups(groups) {
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";

    for (let i = 0; i < groups.length; i++) {
        let groupHeader = document.createElement("h2");
        groupHeader.textContent = "Group " + (i + 1);
        outputDiv.appendChild(groupHeader);

        let groupList = document.createElement("ul");
        for (let j = 0; j < groups[i].length; j++) {
            let participantItem = document.createElement("li");
            participantItem.textContent = groups[i][j];
            groupList.appendChild(participantItem);
        }
        outputDiv.appendChild(groupList);
    }
}

function clearInput() {
    document.getElementById("participants").value = "";
    document.getElementById("groupSize").value = "";
    document.getElementById("output").innerHTML = "";
}
