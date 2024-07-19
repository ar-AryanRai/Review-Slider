let n = 1;
let intervalId;
onStart();

function onStart(){
  display();
  intervalId = setInterval(next, 3000);
}

function display(){
  const ele1 = document.getElementsByClassName("image")[0];
  const ele2 = document.getElementsByClassName("name")[0];
  const ele3 = document.getElementsByClassName("position")[0];
  let photo = data[n.toString()]["src"];
  let name = data[n.toString()]["name"];
  let designation = data[n.toString()]["post"];
  ele1.innerHTML = `<img src="${photo}" alt="profile pic ${n}"/>`;
  ele2.innerHTML = `${name}`;
  ele3.innerHTML = `${designation}`;
}

let leftBtn = document.getElementsByClassName("left")[0];
let rightBtn = document.getElementsByClassName("right")[0];
let surpriseBtn = document.getElementsByClassName("surprise")[0];

leftBtn.addEventListener("click", prev);
rightBtn.addEventListener("click", next);
surpriseBtn.addEventListener("click", random);

function prev(){
  if(n == 1){
    n = Object.keys(data).length;
  }
  else{
    n--;
  }
  display();
  resetInterval(intervalId);
}

function next(){
  if(n == Object.keys(data).length){
    n = 1;
  }
  else{
    n++;
  }
  display();
  resetInterval(intervalId);
}

function resetInterval(){
  clearInterval(intervalId);
  intervalId = setInterval(next, 2000);
}

function random(){
  n = Math.floor(Math.random()*4) + 1;
  display();
  resetInterval();
}