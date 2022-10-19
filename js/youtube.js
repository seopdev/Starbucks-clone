// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
// var player;
function onYouTubeIframeAPIReady() {
  // player = 
  new YT.Player('player', {
    // height: '360',
    // width: '640',
    videoId: 'An6LvWQuj_8',
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, //반복 재생 유무
      playlist: 'An6LvWQuj_8' //반복재생할유튜브아이디목록
    },
    events: {
      onReady: function (event){
        event.target.mute() //음소거
      }
    }
    // events: {
    //   'onReady': onPlayerReady,
    //   'onStateChange': onPlayerStateChange
    // }
  });
}

