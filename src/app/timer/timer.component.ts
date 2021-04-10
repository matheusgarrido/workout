import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  timeLeft: number = 50;

  countdown() {
    const timerPointerRotate = document.getElementById('pointer');
    if (timerPointerRotate) {
      let interval = setInterval(() => {
        const rotation = --this.timeLeft * 6;
        if (rotation <= 0) {
          this.timeLeft = 0;
          timerPointerRotate.style.transform = `rotate(0deg)`;
          clearInterval(interval);
          let interval2 = setInterval(() => {
            timerPointerRotate.classList.contains('light')
              ? timerPointerRotate.classList.remove('light')
              : timerPointerRotate.classList.add('light');
            console.log(timerPointerRotate.classList);
          }, 100);
        } else {
          timerPointerRotate.style.transform = `rotate(${rotation}deg)`;
        }
      }, 1000);
    }
  }
  ngOnInit(): void {
    this.countdown();
  }
}
