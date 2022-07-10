import { Component, OnInit, ViewChild } from '@angular/core';
import { DataEmpleado } from 'src/app/models/empleado';
import { DummydataService} from '../../services/dummydata.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { number } from 'echarts';
import { PieChartEmpleado } from 'src/app/models/piechartEmpleado';
import { pie } from 'd3';
import { LegendPosition, XAxisComponent } from '@swimlane/ngx-charts';

let empleadosRestantes : DataEmpleado [] = [];

@Component({
  selector: 'app-menuprincipal',
  templateUrl: './menuprincipal.component.html',
  styleUrls: ['./menuprincipal.component.css']
})

export class MenuprincipalComponent implements OnInit {
  //Mat Table
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource : MatTableDataSource<DataEmpleado>;
  dummydateService : DummydataService;
  displayedColumns: string[] = ['nombre', 'apellido', 'cursosRestantes', 'fechaHasta' , 'botones'];

  //PieChart
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  view: [number, number] = [700, 400];
  single: any;
  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: LegendPosition = LegendPosition.Below;
  resize:boolean ;
  constructor(public _dummyDataService : DummydataService) {
    this.dummydateService = _dummyDataService;
   }

  ngOnInit(): void {
    empleadosRestantes = this.dummydateService.empleados();
    this.dataSource = new MatTableDataSource<DataEmpleado>(empleadosRestantes);
    this.single = this.collectInfo();
    console.log(innerWidth)
    if(innerWidth > 500)
    {
      this.view = [innerWidth / 3, 400];
    }else{
      this.view = [innerWidth / 1.4, 300];
    }
    console.log(this.single);
  }



  collectInfo()
  {
    let piechartValues : PieChartEmpleado [] = [{name: "0", value: 0}];
    empleadosRestantes.forEach(x => {
      if(!piechartValues.find(pie => pie.name == x.cursosRestantes.toString())){
        
        piechartValues.push({name: x.cursosRestantes.toString(), value: 1});
      }else{
        var index = piechartValues.findIndex(pie => pie.name == x.cursosRestantes.toString());
       piechartValues[index].value = piechartValues[index].value + 1;
      }
    })

    return piechartValues;
  }
 

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  onSelect(data : any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data : any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data : any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  onResize(event : any) {
    if(event.target.innerWidth < 600)
    {
      this.view = [event.target.innerWidth / 1.4, 300];
    }
    else
    {
      this.view = [event.target.innerWidth / 3, 400];
    }
}


}
 