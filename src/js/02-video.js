import Player from '@vimeo/player';

const player = new Player('video-player', {
  id: 236203659,
  autoplay: true,
});

import throttle from 'lodash.throttle';

const saveCurrentTime = currentTime => {
  localStorage.setItem('videoplayer-current-time', currentTime);
};

player.on(
  'timeupdate',
  throttle(() => {
    player.getCurrentTime().then(currentTime => {
      saveCurrentTime(currentTime);
    });
  }, 1000)
);

window.addEventListener('DOMContentLoaded', () => {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime) {
    player.setCurrentTime(savedTime);
  }
});

import throttle from 'lodash.throttle';

player.on(
  'timeupdate',
  throttle(() => {
  }, 1000)
);
