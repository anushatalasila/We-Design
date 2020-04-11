import { Component, OnInit } from '@angular/core';
import { RestService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {

  houses:any = [];

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getHouses();
  }

  getHouses() {
    this.houses = [];
    this.rest.getHouses().subscribe((data: {}) => {
      console.log(data);
      this.houses = data;
    });
  }

  add() {
    this.router.navigate(['/house-add']);
  }

  delete(id) {
    this.rest.deleteHouse(id)
      .subscribe(res => {
          this.getHouses();
        }, (err) => {
          console.log(err);
        }
      );
  }

}
