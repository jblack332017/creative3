$(document).ready(function()
{
  function mod(n, m) {
        return ((n % m) + m) % m;
  } 
  var divArray = [$("#basicInfo"),$("#theImages"),$("#moreInfo"), $("#links"),$("#tags")];
  var currentDiv = 0;
  console.log(divArray);
  $("#rightArrow").click(function()
  {
      divArray[currentDiv].slideUp("fast",function()
      {
        currentDiv++;
        if(currentDiv >= divArray.length) {currentDiv = mod(currentDiv,divArray.length);}
        divArray[currentDiv].css('visibility', 'visible').hide().stop().slideDown("fast");
      });
  });

  $("#leftArrow").click(function()
  {
      divArray[currentDiv].slideUp("fast",function()
      {
        currentDiv--;
        if(currentDiv < 0) {currentDiv = mod(currentDiv,divArray.length);}
        divArray[currentDiv].css('visibility', 'visible').hide().stop().slideDown("fast");
      });
  });
});  
