import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../app-algo/services/logger.service';

@Component({
  selector: 'app-root-default',
  templateUrl: './root-default.component.html',
  styleUrls: ['./root-default.component.scss']
})
export class RootDefaultComponent implements OnInit {

  constructor(private loggerService : LoggerService) { }

  ngOnInit(): void {
    this.loggerService.Writeline("HELLO FROM ROOT DEFAULT")
  }

}
