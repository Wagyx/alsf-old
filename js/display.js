function displayCategory(category) {
    const content = document.getElementById("galleryContent");
    for (let arg of category.words) {
        // make a list item
        const element = document.createElement('div');
        element.className = 'list-item';
        content.appendChild(element);
        const nameElement = document.createElement('p');
        nameElement.innerText = VOCABULARY[arg].name;
        element.appendChild(nameElement);
        const videoElement = document.createElement('video');
        videoElement.src = VOCABULARY[arg].url;
        videoElement.controls = true;
        element.appendChild(videoElement);
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