import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute) {
    this.activatedroute.params.subscribe(data =>{
      console.log(data['id']);
    });
  }

  ngOnInit() {
  }

}
