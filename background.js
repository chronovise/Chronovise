chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
  });
});

document.getElementById('saveWork').onclick = function(){
  var value = document.getElementById('content').firstChild.value.split("\n");
  chrome.storage.sync.set({'work': value},function(){
    console.log("value saved "+value);
  });
}

Website/chronoviseHome.html
