work = ["https://www.google.com","https://www.facebook.com"];
school = ["https://www.youtube.com"];
home = [];
travel = [];


document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('button1').addEventListener('click',loadWork);
  document.getElementById('button2').addEventListener('click',loadSchool);
  document.getElementById('button3').addEventListener('click',loadHome);
  document.getElementById('button4').addEventListener('click',loadTravel);
  document.getElementById('edit1').addEventListener('click',workstatus)
});

function workstatus(e){
  var myNode = document.getElementById("content");
  while(myNode.firstChild){
    myNode.removeChild(myNode.firstChild);
  }
}


function loadWork(e){
  for(i = 0;i<work.length;i++){
    chrome.tabs.create({url:work[i], selected: false});
  }
}

function loadSchool(e){
  for(i = 0;i<work.length;i++){
    chrome.tabs.create({url:school[i], selected: false});
  }
}

function loadHome(e){
  for(i = 0;i<home.length;i++){
    chrome.tabs.create({url:home[i], selected: false});
  }
}

function loadTravel(e){
  for(i = 0;i<work.length;i++){
    chrome.tabs.create({url:travel[i], selected: false});
  }
}
