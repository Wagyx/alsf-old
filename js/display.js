function displayCategory(category) {
    const content = document.getElementById("galleryContent");
    for (let arg of category.words) {
        // make a list item
        const element = document.createElement('div');
        element.className = 'list-item';
        content.appendChild(element);

        if(VOCABULARY.hasOwnProperty(arg)){
            const nameElement = document.createElement('p');
            nameElement.className = "word";
            nameElement.innerText = VOCABULARY[arg].name;
            element.appendChild(nameElement);
            if (VOCABULARY[arg].url != ""){
                const videoElement = document.createElement('video');
                videoElement.src = VOCABULARY[arg].url;
                videoElement.controls = true;
                element.appendChild(videoElement);
            }
            else {
                const msgElement = document.createElement('p');
                msgElement.innerText = "Aucune vidéo n'existe pour ce mot. Vous pouvez contribuer en trouvant une photo ou une vidéo sur Elix ou ailleurs ou en tournant une vous-meme et en me l'envoyant par mail pour que je l'ajoute, merci.";
                element.appendChild(msgElement);
            }
        }
        else{
            const nameElement = document.createElement('p');
            nameElement.className = "word";
            nameElement.innerText = arg;
            element.appendChild(nameElement);
            const msgElement = document.createElement('p');
            msgElement.innerText = "Erreur : Ce nom a un problème.";
            element.appendChild(msgElement);
        }

    }
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
        
        const nameElement = document.createElement('p');
        nameElement.className = "word";
        nameElement.innerText = VOCABULARY[arg].name;
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
        videoElement = document.createElement("video");
        videoElement.src = VOCABULARY[name].url;
        videoElement.controls = true;
        element.appendChild(videoElement);
    }
}