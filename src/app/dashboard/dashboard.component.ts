import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  covidData: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.dataService.loadData().subscribe(
      (res:any)=>{
        console.log(res.data);
        
       
          this.covidData = res.data;
      },
      (error)=>{

      }
    )
  }

}
