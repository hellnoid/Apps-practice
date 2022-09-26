// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BmiProvider {

 calculateBMI(height:number,weight:number){
  if(height>0&&weight>0){
  return weight/height/height;}
  else{
    return "Not Funny! Enter Valid details..."
  }
 }
 classifyBMI(BMI:number|string){
  if(BMI<18.5){
    return "Under weight";
  }
  else if(BMI>=18.5&&BMI<=24.9){
    return "Normal weight";
  }
  else if (BMI>=25&&BMI<=30){
    return "Over weight";
  }
   else if (BMI>30&&BMI<=35){
    return "Class 1 Obesity";
  }
  else if (BMI>35&&BMI<=40){
    return "Class 2 Obesity";
  }
  else if(BMI>40){
    return "Class 3 Obesity";
  }
 }

}
