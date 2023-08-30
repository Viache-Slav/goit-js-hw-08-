import Player from '@vimeo/player';
import {throttle} from 'lodash';
import { toggleDarkMode } from "./dark-mode.js";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const currentTime = localStorage.getItem('videoplayer-current-time');
const shadow = toggleDarkMode;

player.on('timeupdate',  throttle( e => {
    localStorage.setItem('videoplayer-current-time', e.seconds);
}, 1000));

player
.setCurrentTime(localStorage.getItem('videoplayer-current-time'))
.catch(function (error) {
    console.error(error)
});

if (currentTime) {
    player.setCurrentTime(currentTime).catch(function (error) {
      console.error(error);
    });
};

console.log(shadow);