
function endpoint(url){   // data memento
    let string2 = url.slice(72);
    var asset = "";
    for (let i = 0; i < string2.length; i++) {
        if (string2[i] !== "?") {
            asset += string2[i];
        }
        else {
            return asset/*.slice(29);*/
        }
    }
}




function endpointNoMemento(url){ 
    let string2 = url.slice(78);
    var asset = "";
    for (let i = 0; i < string2.length; i++) {
        if (string2[i] !== "?") {
            asset += string2[i];
        }else{
            return asset;
        } 
    }
}
function endpoint1(url){   // data memento
    let string2 = url.slice(72);
    var asset = "";
    for (let i = 0; i < string2.length; i++) {
        if (string2[i] !== "?") {
            asset += string2[i];
        }
        else {
            return asset.slice(29);
        }
    }
}
        


module.exports = {endpoint, endpointNoMemento, endpoint1};