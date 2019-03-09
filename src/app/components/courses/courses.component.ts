import { Component, OnInit } from '@angular/core';
import { AgteamServiceService } from 'src/app/services/agteam-service.service';
import { Course } from 'src/app/interfaces/course.interface';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Object[] = [];
  constructor(private agteamService: AgteamServiceService) {
    this.agteamService.getCourses().subscribe( (data: any) => {
      this.courses = data;
      console.log(this.courses);
      this.courses.shift();
    });
  }

  ngOnInit() {
  }

}
