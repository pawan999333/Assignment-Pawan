import { Component } from '@angular/core';

interface Trip {
  start: string;
  end: string;
  start3: string;
  end3: string;
  level: 1|2;
  arrow: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newStart = '';
  newEnd = '';
  trips: Trip[] = [];

  addTrip() {
    if (!this.newStart || !this.newEnd) { return; }
    const t: Partial<Trip> = {
      start: this.newStart,
      end: this.newEnd,
      start3: this.newStart.slice(0,3).toUpperCase(),
      end3:   this.newEnd.slice(0,3).toUpperCase(),
      level: 1,
      arrow: false
    };
    const prev = this.trips[this.trips.length - 1];
    if (prev) {
      if (prev.start === t.start && prev.end === t.end) {
        t.level = 2;
        t.arrow = false;
      }
      else {
        if (prev.end === t.start) {
          t.level = 1;
          t.arrow = false;
        } else {
          t.level = 1;
          t.arrow = true;
        }
      }
    }
    this.trips.push(t as Trip);
    this.newStart = '';
    this.newEnd   = '';
  }
}
