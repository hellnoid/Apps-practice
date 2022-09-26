import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import { BmiProvider } from '../../providers/bmi/bmi';

@IonicPage()
@Component({
  selector: 'page-bmi',
  templateUrl: 'bmi.html',
})
export class BmiPage {
  height : number;
  weight: number;
  bmi:number|string;
  classify:string;
  constructor(private bmiProvider:BmiProvider) {
  }

calculateBmi(){
  this.bmi=this.bmiProvider.calculateBMI(this.height,this.weight)
  this.classify=this.bmiProvider.classifyBMI(this.bmi);
}


}
