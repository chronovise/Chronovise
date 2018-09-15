sites = ["https://www.google.com","https://www.facebook.com"];

document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('button1').addEventListener('click',loadSites);
  document.getElementById('button2').addEventListener('click',loadSites);
  document.getElementById('button3').addEventListener('click',loadSites);
  document.getElementById('button4').addEventListener('click',loadSites);
});

function loadSites(e){

  for(i = 0;i<sites.length;i++){
    chrome.tabs.create({url:sites[i], selected: false});
  }

}
