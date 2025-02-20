$(document).ready(function(){
 $("button").click(function(){
 $.ajax({url: "demo.txt", success: function(result){
 $("#div1").html(result);
 }});
 });
});