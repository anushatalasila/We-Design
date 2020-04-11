import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-house-edit',
  templateUrl: './house-edit.component.html',
  styleUrls: ['./house-edit.component.css']
})
export class HouseEditComponent implements OnInit {

  @Input() houseData:any = { prod_name: '', prod_desc: '', prod_price:0 };

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getHouse(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.houseData = data;
    });
  }

  updateHouse() {
    this.rest.updateHouse(this.route.snapshot.params['id'], this.houseData).subscribe((result) => {
      this.router.navigate(['/house-details/'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }

}