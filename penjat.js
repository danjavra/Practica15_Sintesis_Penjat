window.addEventListener("load",inicio,false);
function inicio(){
    var div = document.getElementById("start");
    div.addEventListener("click",startAjax, false);
}

function startAjax(){
     var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET","getParaula.php",true);
    xmlHttp.setRequestHeader("Content-Type","application");
    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState===4){
            if(xmlHttp.status == 200){
                var resposta = xmlHttp.responseText;
                var respJSON = JSON.parse(resposta);
                var paraula = respJSON.palabra;
                console.log(paraula);
                var longitud = respJSON.longitud;
                console.log(Longitud);
            }
        }
            
    };
    xmlHttp.send(null);
}
