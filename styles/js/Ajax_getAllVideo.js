function getAllVideo() {
    var data;
    var xhr = getXMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            data = JSON.parse(xhr.responseText);
            console.log(data);
            for(i=0; i<data.length; i++){
                if(data[i].id%2 == 0) {
                    document.getElementById("ArrayVideo").innerHTML += "<li class='collapsible-header collection-item avatar'><div><i class='mdi-action-assessment circle green'> </i> <span id='titre'> Titre : <b>"
                    + data[i].titre + "</b></span> <p id='realisateur'> Réalisateur : " + data[i].realisateur + "</p> <p id='delaisEmprunt'> Delais d'emprunt :" + data[i].DelaisEmprunt 
                    + " h </p> <a href='#!' id='reservation' class='secondary-content'> Reserver <i id='fleche' class='mdi-content-send'></i></a></div> <div class='collapsible-body'><p id='description'> Description : " + data[i].description + "</p></div></li>";
                } else {
                    document.getElementById("ArrayVideo").innerHTML += "<li class='collapsible-header collection-item avatar'><div><i class='mdi-av-play-arrow circle red'> </i> <span id='titre'> Titre : <b>"
                    + data[i].titre + "</b></span> <p id='realisateur'> Réalisateur : " + data[i].realisateur + "</p> <p id='delaisEmprunt'> Delais d'emprunt :" + data[i].DelaisEmprunt 
                    + " h </p> <a href='#!' id='reservation' class='secondary-content'> Reserver <i id='fleche' class='mdi-content-send'></i></a></div> <div class='collapsible-body'><p id='description'> Description : " + data[i].description + "</p></div></li>";
                }
            }
        }
    };
    xhr.open("GET","http://localhost/api.videoStore.fr/video",true);
    xhr.send();
    return false;
}