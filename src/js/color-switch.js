import refs from './refs'
import { colors } from './refs';
import {randomIntegerFromInterval} from './randomInterval'
const { body, startBtn, stopBtn } = refs

let intervalId = null
const INTERVAL_DELAY = 1000;


function setRandomColor () {
   body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
}

startBtn.addEventListener('click', onStartChangeColorClick)
stopBtn.addEventListener('click', onStopBtnClick)

function onStartChangeColorClick() {

  intervalId = setInterval(setRandomColor, INTERVAL_DELAY);
  
  startBtn.disabled = true
}

function onStopBtnClick() {
    clearInterval(intervalId);
    startBtn.disabled = false

}