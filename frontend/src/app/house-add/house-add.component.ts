import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-house-add',
  templateUrl: './house-add.component.html',
  styleUrls: ['./house-add.component.scss']
})
export class HouseAddComponent implements OnInit {

  @Input() houseData = { description: ''};

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  addHouse() {
    this.rest.addHouse(this.houseData).subscribe((result) => {
      this.router.navigate(['/house-details/'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }

}