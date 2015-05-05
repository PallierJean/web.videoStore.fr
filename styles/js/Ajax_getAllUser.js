function getAllUser() {
    var data;
    var xhr = getXMLHttpRequest();
         
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            data = JSON.parse(xhr.responseText);
            console.log(data);
            for(i=0;i<data.length;i++){
                var tableau = document.getElementById("listeUser");

                var ligne = tableau.insertRow(-1);

                var id = ligne.insertCell(0);
                id.innerHTML += data[i].id;
                
                var pseudo = ligne.insertCell(1);
                pseudo.innerHTML += data[i].pseudo;

                var tiret = ligne.insertCell(2);
                tiret.innerHTML += " - ";

                var lastname = ligne.insertCell(3);
                lastname.innerHTML += data[i].lastname;

                var firstname = ligne.insertCell(4);
                firstname.innerHTML += data[i].firstname;

                var Mretard = ligne.insertCell(5);
                Mretard.innerHTML += data[i].Mretard;

                var reservation = ligne.insertCell(6);
                reservation.innerHTML += data[i].reservation;
            }
        }
    };
    xhr.open("GET","http://localhost/api.videoStore.fr/user",true);
    xhr.send();
    return false;
}