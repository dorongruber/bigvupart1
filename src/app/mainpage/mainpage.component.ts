import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  backgroundColor = false;
  routerColor = 'white';
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // console.log('params => ', this.route.url);
    this.route.url.subscribe(res => {
      // console.log('res -> ', res);
      if (res !== undefined && res.length > 0) {
        // console.log('res url => ', res[0].path);
        this.routerColor = res[0].path;
        if (this.routerColor === 'white') {
          this.backgroundColor = false;
        } else {
          this.backgroundColor = true;
        }
      }
    });
  }

}
