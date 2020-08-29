import { Component, OnInit, Input } from '@angular/core';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {

  // @Input() title;
  // @Input() big: boolean;
  // @Input() author;
  // @Input() authorRole;
  // @Input() image;
  constructor() { }

  ngOnInit() {
  }

}
