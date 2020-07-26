let t = document.querySelector("#titlu");
t.onmouseover = function(){
  console.log("Deasupra!");
  t.style.color= "green";
  t.style.textDecoration = "underline";
};

t.onmouseout = function(){
  console.log("Alaturi!");
  t.style.color= "red";
  t.style.textDecoration = "none";
};