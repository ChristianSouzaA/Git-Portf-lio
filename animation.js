var canvas = document.getElementById('X');
var context = canvas.getContext('2d');

var cor = '#180A0A';

canvas.width = 150;
canvas.height = 100;

context.fillStyle = cor;
context.strokeStyle = cor;

context.lineWidth = 5;

context.beginPath();
context.moveTo(62.5, 40);
context.lineTo(31,20);
context.stroke();

context.beginPath();
context.moveTo(62.5, 20);
context.lineTo(31, 40);
context.stroke();

var canvas = document.getElementById('X-1');
var context = canvas.getContext('2d');

var cor = '#180A0A';

canvas.width = 150;
canvas.height = 100;

context.fillStyle = cor;
context.strokeStyle = cor;

context.lineWidth = 5;

context.beginPath();
context.moveTo(62.5, 40);
context.lineTo(31,20);
context.stroke();

context.beginPath();
context.moveTo(62.5, 20);
context.lineTo(31, 40);
context.stroke();
