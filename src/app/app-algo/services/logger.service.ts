import { Injectable } from '@angular/core';
import { AppAlgoModule } from '../app-algo.module';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
 count =0;
  constructor() {
   }
  
   Writeline(data : any){
     this.count++;
      console.log(data);
      console.log("count is",this.count)
   }
}
