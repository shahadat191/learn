import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {Article, PracticeService} from '../practice.service';
import {ActivatedRoute, Router, Route} from '@angular/router';
import {HashLocationStrategy, Location, LocationStrategy} from '@angular/common';

@Component({
  selector: 'app-test-data',
  providers: [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  templateUrl: './test-data.component.html',
  styleUrls: ['./test-data.component.scss']
})
export class TestDataComponent implements OnInit, AfterViewChecked {

  constructor(private practiceService: PracticeService,
              private activatedRoute: ActivatedRoute,
              private location: Location,
              private router: Router) { }

  articles: Article[];
  id: any;
  fragment: string;
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;

    });
    this.practiceService.getArticles().subscribe(data => {
      this.articles = data;
    });

    this.activatedRoute.fragment.subscribe(data => {
      this.fragment = data;
      console.log(this.fragment);
    });



  }
  ngAfterViewChecked() {
    if(this.fragment && this.articles) {
      console.log("After View Checked");
      this.goSelectedItem(this.fragment);
    }
  }

  goSelectedItem(event) {
    document.getElementById(event.toString()).scrollIntoView();

  }
}
