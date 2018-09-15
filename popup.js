sites = ["https://www.google.com","https://www.facebook.com"];

document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('button').addEventListener('click',loadSites());
});

function loadSites(e){
  for(i = 0;i<sites.length;i++){
    chrome.tabs.create({url:sites[i]},callback);
  }
}

function callback(data){
  console.log(data);
}
