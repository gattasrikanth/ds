/**
 * Utility function to getElementById.
*/
function Id(id) {
    return document.getElementById(id);
}
function log(message) {
    if(logLines > 10) {
        footer.innerHTML = '';
        logLines = 0;
    }
    logLines++;
    if(message.success) {
        footer.innerHTML += '<br>' + message.success;
        return;
    }
    if(message.success) {
        footer.innerHTML += '<br>' + message.failure;
        return;
    }
    footer.innerHTML += '<br>' + message;
}

function printList() {
    if(!list) {
        showList.innerHTML = "Your list is EMPTY"
        return;
    }
    var result = list.printList();
    var output = '[';
    if(result.code == 0) {
        var length = result.result.length
        for (var i = 0; i < length; i++) {
            output += "'" + result.result[i]  + "'";
            if( i + 1 != length)
             output += ", "
        }
    }
    showList.innerHTML = output + ']';
}
