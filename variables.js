var heading = (function()
{/*
<html>
<head>


  <link href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/lib/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
<style>
body,h1,h2,h3,h4,h5 {font-family: "Raleway", sans-serif}
.w3-third img{margin-bottom: -6px; opacity: 0.8; cursor: pointer}
.w3-third img:hover{opacity: 1}
#form{
  margin: 20px;
}
img{
  height: 35%!important;
}
</style>


  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.19/angular.min.js"></script>
  <script src="http://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.10/angular-ui-router.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.19/angular-sanitize.min.js"></script>
  <script src="web.js"></script>
  <script src="variables.js"></script>


</head>
<body >
*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];

var ending = (function()
{/*

</body>
</html>
*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];


var template = (function () {/*
   
<h1 class="w3-center">#Name</h1>


<div class='w3-light-grey w3-content' style='max-width:1600px'>




<!-- Overlay effect when opening sidenav on small screens -->
<div class='w3-overlay w3-hide-large w3-animate-opacity' onclick='w3_close()' style='cursor:pointer' title='close side menu' id='myOverlay'></div>

<!-- !PAGE CONTENT! -->
<div class='w3-main' style='margin-left:300px'>

  <!-- Push down content on small screens --> 
  <div class='w3-hide-large' style='margin-top:83px'></div>
  
  <!-- Photo grid -->
  <div class="w3-row">
      <img class='w3-third' src='images/natureboy.jpg' style='width:100% ; height:30%!important;' alt='A boy surrounded by beautiful nature'>
      <img class='w3-third' src='images/girl_mountain.jpg' style='width:100% ; height:30%!important;' alt='What a beautiful scenery this sunset'>

      <img class='w3-third' src='images/boy.jpg' style='width:100% ; height:30%!important;' alt='Quiet day at the beach. Cold, but beautiful'>
      <img class='w3-third' src='images/man_bench.jpg' style='width:100% ; height:30%!important;' alt='Waiting for the bus in the desert'>
    
      <img class='w3-third' src='images/girl.jpg' style='width:100% ; height:30%!important;' alt='Canoeing again'>
      <img class='w3-third' src='images/girl_train.jpg' style='width:100% ; height:30%!important;' alt='A girl, and a train passing'>
</div>

  
  

  <!-- About section -->
  <div class='w3-container w3-dark-grey w3-center w3-text-light-grey w3-padding-32' id='about'>
    <h4><b>About Me</b></h4>
    <div class='w3-content w3-justify' style='max-width:600px'>
      <p>#aboutMe
      </p>
      <p>#email</p>
      <p>tel: #phoneNumber</p>
    </div>
  </div>

  

  <!-- Footer -->
  <footer class='w3-container w3-padding-32 w3-grey'>  
    <div class='w3-row-padding'>
      <div class='w3-third'>
        <h3>INFO</h3>
        <p>#info</p>      
      </div>
    
      <div class='w3-third'>
        <h3>LINKS</h3>
        <ul class='w3-ul'>
          <li class='w3-padding-16 w3-hover-black'>
            <a href="#link1" class='w3-large'>#link1Title</a>
          </li>
          <li class='w3-padding-16 w3-hover-black'>
            <a href="#link2" class='w3-large'>#link2Title</a>
          </li> 
        </ul>
      </div>

      <div class='w3-third'>
        <h3>POPULAR TAGS</h3>
        <p>
          <span class='w3-tag w3-black w3-margin-bottom'>#tag1</span> <span class='w3-tag w3-dark-grey w3-small w3-margin-bottom'>#tag2</span> <span class='w3-tag w3-dark-grey w3-small w3-margin-bottom'>#tag3</span>
         
        </p>
      </div>
    </div>
  </footer>
  
  <div class='w3-black w3-center w3-padding-24'>Josh Black Estate</a></div>

<!-- End page content -->
</div>




</div>
*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];