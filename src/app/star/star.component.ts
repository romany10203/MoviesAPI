import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnChanges {
  @Input() rating!: number;
  cropWidth: number = 75;
  @Output() tellParent: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.cropWidth = (this.rating)* 75 / 10;
  }

  tellParaentData() {
    
    this.tellParent.emit(`child emits data with rating ${this.rating}`);
  }
  constructor() {}
}
