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