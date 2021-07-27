var socket = io();
var sysmes = false;
socket.on("message", function (data) {
	if (!sysmes) return;
    let currentDate = new Date();
    let time =
        currentDate.getHours() +
        ":" +
        currentDate.getMinutes() +
        ":" +
        currentDate.getSeconds();
    let cDay = currentDate.getDate();
    let cMonth = currentDate.getMonth() + 1;
    let cYear = currentDate.getFullYear();
    var node = document.createElement("p");
    var textnode = document.createTextNode(
        time + " " + cDay + "/" + cMonth + "/" + cYear + ": " + data
    );
    node.appendChild(textnode);
    document.getElementById("systemMessages").appendChild(node);
});

function toggleSystemMessages() {
    sysmes = !sysmes;
    return;
}
