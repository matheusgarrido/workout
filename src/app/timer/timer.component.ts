import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnChanges {
  @Input() displayTime: number = 0;
  timeLeft: number = 0;
  interval: ReturnType<typeof setInterval> = 0;

  countdown() {
    if (this.timeLeft === this.displayTime) clearInterval(this.interval);
    const timerPointerRotate = document.getElementById('pointer');
    this.timeLeft = this.displayTime;
    console.log(this.timeLeft);
    if (timerPointerRotate) {
      let rotation = this.timeLeft * 6;
      timerPointerRotate.style.transform = `rotate(${rotation}deg)`;
      timerPointerRotate.classList.remove('light');
      this.interval = setInterval(() => {
        rotation = --this.timeLeft * 6;
        if (rotation <= 0) {
          timerPointerRotate.style.transform = `rotate(0deg)`;
          clearInterval(this.interval);
          this.timeLeft = 0;
          this.interval = setInterval(() => {
            timerPointerRotate.classList.contains('light')
              ? timerPointerRotate.classList.remove('light')
              : timerPointerRotate.classList.add('light');
          }, 100);
        } else {
          timerPointerRotate.style.transform = `rotate(${rotation}deg)`;
        }
      }, 1000);
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.displayTime = changes.displayTime.currentValue;
    this.timeLeft = changes.displayTime.currentValue;
    clearInterval(this.interval);
    const timerPointerRotate = document.getElementById('pointer');
    setTimeout(() => {
      if (timerPointerRotate) timerPointerRotate.classList.remove('change');
    }, 100);
    if (timerPointerRotate) timerPointerRotate.classList.add('change');
    this.countdown();
  }
}
