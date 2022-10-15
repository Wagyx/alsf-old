function displayCategory(category) {
    const content = document.getElementById("galleryContent");
    for (let arg of category.words) {
        // make a list item
        const element = document.createElement('div');
        element.className = 'list-item';
        content.appendChild(element);

        if (VOCABULARY.hasOwnProperty(arg)) {
            const nameElement = makeWordElement(VOCABULARY[arg].name);
            element.appendChild(nameElement);
            const videoElement = makeVideoElement(VOCABULARY[arg].url);
            element.appendChild(videoElement);
        } else {
            const nameElement = makeWordElement(arg)
            element.appendChild(nameElement);
            const msgElement = document.createElement('p');
            msgElement.innerText = "Erreur : Ce nom n'est pas dans la base de données. Veuillez en informer l'administrateur, s'il vous plait.";
            element.appendChild(msgElement);
        }
    }
}

function makeWordElement(name) {
    const nameElement = document.createElement('p');
    nameElement.className = "word";
    nameElement.innerText = name;
    return nameElement;
}

function makeVideoElement(url) {
    let element;
    if (url != "") {
        element = document.createElement('video');
        element.src = url;
        element.controls = true;
    } else {
        element = document.createElement('p');
        element.innerText = "Aucune vidéo n'a été trouvé pour ce mot. Vous pouvez contribuer en trouvant une photo ou une vidéo sur Elix ou ailleurs ou en tournant une vous-meme et en l'envoyant à l'administrateur par mail pour qu'elle soit ajoutée, merci.";
    }
    return element;
}

function displayList() {
    const content = document.getElementById("listContent");
    words = Object.keys(VOCABULARY);
    words.sort((a, b) => a.normalize('NFD') > b.normalize('NFD'));
    for (let arg of words) {
        // make a list item
        const element = document.createElement('div');
        element.className = 'list-item';
        element.onclick = displayVideo;
        content.appendChild(element);

        const nameElement = makeWordElement(VOCABULARY[arg].name)
        nameElement.onclick = displayVideo;
        element.appendChild(nameElement);
    }
}

function displayVideo(event) {
    let element = event.target;
    if (element.tagName.toLowerCase() == 'p') {
        element = element.parentElement;
    }
    if ((element.className == 'list-item') && (element.children.length == 1)) {
        const name = element.children[0].innerText;
        const videoElement = makeVideoElement(VOCABULARY[name].url);
        element.appendChild(videoElement);
    }
}