	
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

function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
 
    $.ajax({
        type: "POST",
        url: "php/form-process.php",
        data: "name=" + name + "&email=" + email + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            }
        }
    });
}
function formSuccess(){
    $( "#msgSubmit" ).removeClass( "hidden" );
}

if (!$_POST['name']) {
    $errName = 'Please enter your name';
}


if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    $errEmail = 'Please enter a valid email address';
}



if ($human !== 5) {
    $errHuman = 'Your anti-spam is incorrect';
}