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
      autoplay: true, // �ڵ� ��� ����
      loop: true, //�ݺ� ��� ����
      playlist: 'An6LvWQuj_8' //�ݺ��������Ʃ����̵���
    },
    events: {
      onReady: function (event){
        event.target.mute() //���Ұ�
      }
    }
    // events: {
    //   'onReady': onPlayerReady,
    //   'onStateChange': onPlayerStateChange
    // }
  });
}

