//Méthode qui crée l'objet XMLHttpRequest => sert à envoyer des requetes HTTP donc necessaire dans toutes les autres méthodes
function getXMLHttpRequest() {
    var xhr = null;
    if (window.XMLHttpRequest || window.ActiveXObject) {
        if (window.ActiveXObject) {
            try { xhr = new ActiveXObject("Msxml2.XMLHTTP"); }
            catch(e) { xhr = new ActiveXObject("Microsoft.XMLHTTP"); }
        } else { xhr = new XMLHttpRequest(); }
    } else {
        alert("Votre navigateur ne supporte pas l'objet MLHTTPRequest...");
        return null;
    }
    return xhr;
}

function getBoutique() {
    var data;
    var xhr = getXMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            data = JSON.parse(xhr.responseText);
            console.log(data);
            document.getElementById("boutique").innerHTML = data[0].nomMag;
        }
    };
    xhr.open("GET","http://localhost/api.videoStore.fr/boutique/1",true);
    xhr.send();
    return false;
}