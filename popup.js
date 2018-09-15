var work = [];
var school = [];
var home = [];
var travel = [];

var saveNodes = [];

chrome.storage.sync.get(['work'], function(result){
  if(result.definedURL!=undefined){
    work = result;
  }
})

document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('button1').addEventListener('click',loadWork);
  document.getElementById('button2').addEventListener('click',loadSchool);
  document.getElementById('button3').addEventListener('click',loadHome);
  document.getElementById('button4').addEventListener('click',loadTravel);
  document.getElementById('edit1').addEventListener('click',workstatus);
});

function workstatus(e){

  var myNode = document.getElementById("content");

  while(myNode.firstChild){
    saveNodes.push(myNode.firstChild);
    myNode.removeChild(myNode.firstChild);
  }

  var node = document.createElement("button")
  node.setAttribute("id", "saveWork");
  var node1 = document.createTextNode("Save Changes");
  node.appendChild(node1);
  node.style.margin = "0px 0px 0px 0px";

  var area = document.createElement("textarea");
  area.setAttribute("rows","13");
  area.setAttribute("cols", "26");
  area.style.margin = "0px 0px 20px 0px";

  for(i=0;i<work.length;i++){
    x = document.createTextNode(work[i]+"\n");
    area.appendChild(x);
  }
  myNode.append(area);
  myNode.append(node);
  document.getElementById("saveWork").addEventListener('click', revertWork);
}

function revertWork(e){
   var myNode = document.getElementById("content");

   area = myNode.firstChild.value.split("\n");

   work = area;

   chrome.storage.sync.set({'work':work},function(){
      console.log('Value is set to'+work);
   })


  myNode.removeChild(myNode.firstChild);
  myNode.removeChild(myNode.firstChild);
  for(i = 0;i<saveNodes.length;i++){
    myNode.appendChild(saveNodes[i]);
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
