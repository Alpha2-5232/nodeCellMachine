var socket = io();
socket.on('message', function (data) {
  console.log(data);
});

var gameManager = {
  canvas = document.getElementById("canvas"),
  start: function () {
    this.context = this.canvas.getContext("2d");
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },

}

class Cell {
  
}