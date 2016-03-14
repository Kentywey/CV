	
$('#myTabs a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
});

function draw() {
    var ctx = document.getElementById('canvas').getContext('2d');
    var img = new Image();
    img.src = 'backdrop.png';
    img.onload = function(){
      ctx.drawImage(img, 0, 0);
      ctx.beginPath();
      ctx.moveTo(30, 96);
      ctx.lineTo(70, 66);
      ctx.lineTo(103, 76);
      ctx.lineTo(170, 15);
      ctx.stroke();
    }
  }

var img = new Image();   // Crée un nouvel objet Image
img.src = 'myImage.png'; // Définit le chemin vers sa source
img.onload = function(){
  // instructions appelant drawImage ici
}

function creation_graphique() {
 
         
            context.fillStyle = "gold";
            context.fillRect(canvas.width-9, 0, 9, 80);
}