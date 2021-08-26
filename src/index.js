class CountdownTimer {
    constructor () {
        this.refs = {
          timer: document.querySelector('#startDate'),
          sec: document.querySelector('[data-value="secs"]'),
          min: document.querySelector('[data-value="mins"]'),
          hour: document.querySelector('[data-value="hours"]'),
          day: document.querySelector('[data-value="days"]'),
      };
      this.id = null;
      this.endDate = new Date("Septamber 1, 2021");
  
      // this.timerStart = this.timerStart.bind(this);
      // this.timerStop = this.timerStop.bind(this);
  }  
  calc = () => {
      const currentDate = Date.now();
      const time = this.endDate - currentDate;
  
      const secs = Math.floor((time % (1000 * 60)) / 1000);
      this.refs.sec.textContent = secs < 10 ? `0${secs}` : secs;
  
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      this.refs.min.textContent = mins < 10 ? `0${mins}` : mins;
  
      const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.refs.hour.textContent = hours < 10 ? `0${hours}` : hours;
  
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.refs.day.textContent = days < 10 ? `0${days}` : days;
  
  }
  timerStart = () => {
      this.startDate = Date.now();
      this.id = setInterval(this.calc, 1000);
  
  }
  timerStop = () => {
      clearInterval(this.id);
  }
  
  init() {
      document.addEventListener('DOMContentLoaded', this.timerStart);
  }
  }
  
  const timer = new CountdownTimer();
  timer.init();
  
  // const refs = {
  //     timer: document.querySelector('#startDate'),
  //     sec: document.querySelector('[data-value="secs"]'),
  //     min: document.querySelector('[data-value="mins"]'),
  //     hour: document.querySelector('[data-value="hours"]'),
  //     day: document.querySelector('[data-value="days"]'),
  // }
  //document.addEventListener('DOMContentLoaded', timerStart);
  
  
  // let id = null;
  // let endDate = new Date("Septamber 1, 2021");
  
  // function calc () {
  //     const currentDate = Date.now();
  //     const time = endDate - currentDate;
  
  //     const secs = Math.floor((time % (1000 * 60)) / 1000);
  //     refs.sec.textContent = secs < 10 ? `0${secs}` : secs;
  
  //     const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  //     refs.min.textContent = mins < 10 ? `0${mins}` : mins;
  
  //     const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //     refs.hour.textContent = hours < 10 ? `0${hours}` : hours;
  
  //     const days = Math.floor(time / (1000 * 60 * 60 * 24));
  //     refs.day.textContent = days < 10 ? `0${days}` : days;
  
  
      //console.log (secs);
      //console.log (mins);
      //console.log(Math.floor(delta / 1000));
  // }
  
  // function timerStart() {
  //     startDate = Date.now();
  //     id = setInterval(calc, 1000);
      //console.log(start);
  // }