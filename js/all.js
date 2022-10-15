init();

function init(){

    const content = document.getElementById("content");
    
    for (let arg in VOCABULARY) {

        // make a list item
        const element = document.createElement( 'div' );
        element.className = 'list-item';

        const nameElement = document.createElement( 'p' );
        nameElement.innerText = VOCABULARY[arg].name;
        element.appendChild(nameElement);
        const videoElement = document.createElement( 'video' );
        videoElement.src = VOCABULARY[arg].url;
        videoElement.controls = true;
        // console.log(videoElement);
        element.appendChild(videoElement);
        content.appendChild( element );

    }

}

