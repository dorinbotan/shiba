function httpGetAsync(url, callback)
{
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }

    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}

function callback(response) {
    document.body.innerHTML += '<img src=\'' + response + '\' alt=\'It\'s a shiba indeed\'/></br>'
}

function loadShibas() {
    httpGetAsync('shiba', callback);
    httpGetAsync('shiba', callback);
    httpGetAsync('shiba', callback);
}
