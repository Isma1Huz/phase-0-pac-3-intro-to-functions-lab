
function shout(string) {
    return string.toUpperCase();
  }
  shout('hello');
  
function whisper(string) {
    return string.toLowerCase();
}
whisper("HELLO");

function logShout(string){
  console.log(string.toUpperCase());
}

logShout("new");
function logWhisper(string){
  console.log(string.toLowerCase());
}

logWhisper("new");

function sayHiToHeadphonedRoommate(string){
  if(string === string.toLowerCase()){
    return "I can't hear you!";
  } else if(string === string.toUpperCase() ){
    return "YES INDEED!";
  } else if(string === "Let's have dinner together!") {
    return "I would love to!";
  }
 

}
sayHiToHeadphonedRoommate("HELLO");



