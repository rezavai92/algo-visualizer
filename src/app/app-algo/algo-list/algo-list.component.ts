import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlgorithmList } from '../../shared-config/constants';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-algo-list',
  templateUrl: './algo-list.component.html',
  styleUrls: ['./algo-list.component.scss']
})
export class AlgoListComponent implements OnInit {

  algoList = AlgorithmList;
  constructor(
    private _router : Router,
    private _activedRoute : ActivatedRoute,
    private _loggerService : LoggerService
    ) { }

  ngOnInit(): void {
    this._loggerService.Writeline("from algo list");
  }
  navigateToVisualizer(algo : any){
    this._router.navigate([algo.skid],{relativeTo : this._activedRoute})
  }

}
