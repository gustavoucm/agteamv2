import { Component, OnInit } from '@angular/core';
import { AgteamServiceService } from 'src/app/services/agteam-service.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private agteamService: AgteamServiceService) {
    this.agteamService.getCourses().subscribe( (data: any) => {
      console.log(data);
    });
  }

  ngOnInit() {
  }

}
