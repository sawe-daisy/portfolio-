import {Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Project} from '../models/project';
@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  date: Date = new Date();
  projects: Project[] = [
    {
      name: 'Vocelli Pizza', image: 'assets/projects/pizzare.png', desc: 'I developed this app using a basic Html,CSS,Bootstrap and Javascript, ' +
        'The main purpose of the application was to assist both the customers and Vocelli Pizza attendance to have save time while processing orders and ' +
        '', demo: 'https://xenodochial-pare-ad2ba5.netlify.app', source: 'https://github.com/PerisOduol618/Vocelli-Pizza'
    },
    {
      name: 'Github Search', image: 'assets/projects/githubsearch.png', desc: 'This is an angular app' +
        'It is an personalized app where you could  app whereby I could search for various github users and view on their repositories. It is uses an access token from Githubs Api' +
        ' The access token filters data from github to return only users information and repositories.',
      demo: 'https://perisoduol618.github.io/GithbSearch/', source: 'https://github.com/PerisOduol618/Vocelli-Pizza'
    },
    
    {
      name: 'The Neighborhood', image: 'assets/projects/nei.png', desc: 'This  application is developed with Django ' +
        ' It allows you to be in the know about everything happening in your neighborhood. From contact information of different handyman to meeting announcements or even alerts. ' +
        'The web application uses PostgreSQL as its main database. Source code is ' +
        'available on my Github.', demo: 'https://perishood.herokuapp.com/',source: 'https://github.com/PerisOduol618/Neighbour-hood'
    },
    
    
    {
      name: 'NewsArticles', image: 'assets/projects/news.png', desc: 'NewsArticles App is a flask  app that ' +
      'displays various news sorces where users can click links that redirects them to the original site of the news.It involved consumming a News Api in a JSON format Api that generates latest news from  diffrent sources. ' +
        '',
      demo: 'https://peris-oduol-news-articles1.herokuapp.com/', source: 'https://github.com/PerisOduol618/News-Articles-'
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

