import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-viewer',
  templateUrl: './data-viewer.component.html',
  styleUrls: ['./data-viewer.component.scss']
})
export class DataViewerComponent implements OnInit {
  @Input() content;
  constructor() { }

  ngOnInit() {
  }

}
