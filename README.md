# NIT-1.0.js
NIT.js works some how like jquery but with more included functions to help you in your project
try this:
  <!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>Demo</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script type="text/javascript"  src="js/NIT-1.0.js"></script>
<style type="text/css">
body{
    font-family: sans-serif;
    margin-left: 30px;
    text-align: center;
    margin-top: 10px;
    background-color: #f0f0f0;
}
p ,button{
background-color: #6078ea;
color: #fff;
padding: 5px 5px 5px 5px;
font-family: sans-serif;
border-radius: 6px;
cursor: pointer;
}
.bs-card{
height: 350px;
}
</style>
</head>
<body id="setbg">
<div class="bs-card">
<h1>Am supposed to be a card</h1>
<text>can you please click the button below and make me a card</text>
</div>
<p>MakeCard</p>
<button type="button" id="setbackground">setBackgroundImage</button>
<br>
<button type="button" class="hide-card">hide</button>
<button type="button" class="show-card">show</button>
<button type="button" id="loadNew">LOAD NEW DATA</button>
<script type="text/javascript">
main(function(){
//make cards
$("p").toggle(function(event){
event.preventDefault();
$(".bs-card").css({
    'padding':'5px 5px 5px 5px',
    'background-color':'#ffffff',
    'border': '1px solid #ccc',
    'box-shadow':'0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important',
});
});

//set back ground image
$("#setbackground").on('click',function(){
    $(".bs-card").setBackgroundImage("img/phone.jpg");
});
//hide card
$(".hide-card").on('click',function(){
$(".bs-card").hide();
})
//show
$(".show-card").on('click',function(){
$(".bs-card").show();
})
//ajax stuff
$("#loadNew").on('click',function(){
$ajax({
    url : 'demo.php',
    method: 'POST',
    data : {userName:"walulya francis"},
    success:function(data){
        $(".bs-card").html(data);
      }
   });

  });


});

</script>
<h2>YOU CAN EXPERIMENT WITH THE FOLLOWING FUNCTION</h2>   
<pre>
 .hide()
 .show()
 //with speed
 .hide(2000)//2seconds to hide
 .show(3000) //3seconds to show
 .attr(name,value)
.isChecked()
.add(className)
empty(fileldName) returns true or false
//ajax support
//POST
$ajax({
    url : 'demo.php',
    method: 'POST',
    data : {userName:"walulya francis"},
    success:function(data){
        $(".bs-card").html(data);
      }
   });
   //GET
   $ajax({
    url : 'demo.php',
    method: 'GET',
    data : {userName:"walulya francis"},
    success:function(data){
        $(".bs-card").html(data);
      }
   });
   //JSON support   $ajax({
    url : 'demo.php',
    method: 'GET',
    data : {userName:"walulya francis"},
    type : 'JSON',
    success:function(data){
        $(".bs-card").html(data);
      }
   });
</pre>
<h3>PLEASE GUYZ CONTRIBUTE TO THIS PROJECT,THANK U</h3>
</body>
</html>
