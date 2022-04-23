import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BubbleSortVisualizerService } from '../services/bubble-sort-visualizer.service';

@Component({
  selector: 'app-bubble-sort-visualizer',
  templateUrl: './bubble-sort-visualizer.component.html',
  styleUrls: ['./bubble-sort-visualizer.component.scss']
})
export class BubbleSortVisualizerComponent implements OnInit {
  Items : {value: number, index : number}[] = [];
  arrayItems : string ="";
  currentProgress="0";
  showMaxLimitExceedError = false;
  sortGoingOn = false;
  @ViewChild('itemRef',{static:true}) ItemRef! : ElementRef<HTMLElement>;
  constructor(private _bubbleSortVisualizerService : BubbleSortVisualizerService) { }
  
  ngOnInit(): void {
  }
  populateItems(){
    let items=this.arrayItems.split(',').filter(item=>item!='').map((item,index)=>{
      return {
        value : Number(item.trim()),
        index : index
      }
    
    } );
    if(items.length<=15){
      this.Items=[...items];
      this.showMaxLimitExceedError=false;
    }
    else{
      this.showMaxLimitExceedError=true;
    }
  }

  async startSorting(){
    this.sortGoingOn=true;
    for(let i=0;i<this.Items.length-1;i++){
      let check = 0;
      for(let j=0;j<this.Items.length-i-1;j++){
          const firstItem = this.Items[j];
          const secondItem = this.Items[j+1];
          const firstChild  = this.ItemRef.nativeElement.children[j] as unknown as HTMLElement;
          const secondChild  = this.ItemRef.nativeElement.children[j+1] as unknown as HTMLElement;
          firstChild.style.backgroundColor="green";
          secondChild.style.backgroundColor = "green";
          
          await new Promise((resolve,reject)=>{setTimeout(()=>{resolve("hi")},600)});
          if(firstItem.value>secondItem.value){
           [this.Items[j],this.Items[j+1]] = [this.Items[j+1],this.Items[j]];
          
            check++;
          }
          await new Promise((resolve,reject)=>{setTimeout(()=>{resolve("hi")},500)});
          let toBeGreened = this.ItemRef.nativeElement.children[j] as unknown as HTMLElement;
          toBeGreened.style.backgroundColor="skyblue";
        
      }
     const CurrentIterLastElement = this.ItemRef.nativeElement.children[this.Items.length-i-1] as unknown as HTMLElement ;
     CurrentIterLastElement.style.backgroundColor="#3248a8";
     if( i==this.Items.length-2){
      const lastElem = this.ItemRef.nativeElement.children[0] as unknown as HTMLElement ;
      lastElem.style.backgroundColor="#3248a8";
     }
     this.currentProgress= parseInt((((i+2)/this.Items.length)*100).toString(),10).toString()
     await new Promise((resolve,reject)=>{setTimeout(()=>{resolve("blood")},500)})
    
      // if(check===0){

      //   return;
      // }
    }
    this.sortGoingOn=false;
  }


}
