import Player from '@vimeo/player';
import {throttle} from 'lodash';
import { toggleDarkMode } from "./dark-mode.js";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate',  throttle( e => {
    localStorage.setItem('videoplayer-current-time', e.seconds);
}, 1000));

player
.setCurrentTime(localStorage.getItem('videoplayer-current-time'))
.catch(function (error) {
    console.error(error)
});

const body = document.querySelector("body"); 
const toggle = document.querySelector(".toggle");

toggleDarkMode(body, toggle);