import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }
  selected = 'option2';

  ngOnInit(): void {
  }
  add(){
    alert("Class Added")
  }
  del(){
    alert("Class Added")
  }

}
