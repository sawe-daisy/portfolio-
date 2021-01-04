import {Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Projects} from '../models/projects';
@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  date: Date = new Date();
  projects: Projects[] = [
    {
      name: 'Github Search', image: 'assets/projects', desc: 'This is an angular app' +
        'It is an personalized app where you could  app whereby I could search for various github users and view on their repositories. It is uses an access token from Githubs Api' +
        ' The access token filters data from github to return only users information and repositories.',
      demo: 'https://sawe-daisy.github.io/git-find/', source: 'https://github.com/sawe-daisy/git-find/tree/master/git-search'
    },
    
    
    {
      name: 'SourceInfo', image: 'assets/projects/news.png', desc: 'SourceInfo App is a flask  app that ' +
      'displays various news sorces where users can click links that redirects them to the original site of the news.It involved consumming a News Api in a JSON format Api that generates latest news from  diffrent sources. ' +
        '',
      demo: 'https://source-info.herokuapp.com/', source: 'https://github.com/sawe-daisy/source-info'
    },
  ];

  showScrollButton = false;

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    this.showScrollButton = window.pageYOffset > 500;
  }

  moveToTop() {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    window.scroll()
  }
}

