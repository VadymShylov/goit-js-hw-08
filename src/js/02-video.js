import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const setCurrentVideoTime = event => {
  const stringifyData = JSON.stringify(event);

  localStorage.setItem('videoplayer-current-time', stringifyData);
};

const savedVideoTime = () => {
  const savedDataTime = localStorage.getItem('videoplayer-current-time');
  const parsedDataTime = JSON.parse(savedDataTime) ?? {};

  if (savedDataTime) {
    player.setCurrentTime(parsedDataTime.seconds);
  }
};

savedVideoTime();
player.on('timeupdate', throttle(setCurrentVideoTime, 1000));


