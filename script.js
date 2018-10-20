var client = new XMLHttpRequest();
var hats, newhats, i;
var slogans = [];
client.open('GET', 'hats.txt');
client.onreadystatechange = function() {
  if(client.readyState === 4 && client.status === 200) {
    hats = client.responseText;
    //alert(hats);
    var hatsbyline = hats.split("\n");
    for(i = 0; i < hatsbyline.length; i++){
      newhats = hatsbyline[i].split(",");
      slogans.push(newhats[2]);
    }
    //alert(slogans);
    document.getElementById("slogan").innerHTML = slogans[Math.floor(Math.random()*slogans.length)].replace(/['"]+/g, '');
  }
}
client.send();
