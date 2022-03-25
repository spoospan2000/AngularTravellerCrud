import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { TravellerModel } from './traveller.model';

@Component({
  selector: 'app-traveller',
  templateUrl: './traveller.component.html',
  styleUrls: ['./traveller.component.css']
})
export class TravellerComponent implements OnInit {

  formvalue!:FormGroup;
  travellerModelObj:TravellerModel=new TravellerModel();
  travellerData!:any;
  showAdd!:boolean;
  showUpdate!:boolean;
  constructor(private formbuilder:FormBuilder, private api:ApiService) 
  {
    
  }

  ngOnInit(): void {
    this.formvalue=this.formbuilder.group({
      Firstname:[''],
      Lastname:[''],
      Address:[''],
      Email:[''],
      Mobile:[''],
      Country:['']
    })
    this.getTravellerDetails();
  }
  clickAddTraveller()
  {
    this.formvalue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }
postTravellerDetails()
{
  this.travellerModelObj.Firstname=this.formvalue.value.Firstname;
  this.travellerModelObj.Lastname=this.formvalue.value.Lastname;
  this.travellerModelObj.Address=this.formvalue.value.Address;
  this.travellerModelObj.Email=this.formvalue.value.Email;
  this.travellerModelObj.Mobile=this.formvalue.value.Mobile;
  this.travellerModelObj.Country=this.formvalue.value.Country;
  
  this.api.postTraveller(this.travellerModelObj)
  .subscribe(res=>{
    console.log(res);
    alert('Traveller Added Successfully');
    this.getTravellerDetails();
    let ref=document.getElementById('cancel')
    ref?.click();
    this.formvalue.reset();
  },
  err=>{
alert('Something Went Wrong');
  }
  )
  
}
getTravellerDetails()
{
this.api.getTraveller()
.subscribe(res=>{
  this.travellerData=res;
})
}

deleteTraveller(tvr:any)
{
  this.api.deleteTraveller(tvr.Id)
  .subscribe(res=>{
    alert("Record Deleted Successfully");
    this.getTravellerDetails();
  })
}
onEdit(tvr:any)
{
  this.showAdd=false;
  this.showUpdate=true;
  this.travellerModelObj.Id=tvr.Id;
  this.formvalue.controls['Firstname'].setValue(tvr.Firstname);
  this.formvalue.controls['Lastname'].setValue(tvr.Lastname);
  this.formvalue.controls['Address'].setValue(tvr.Address);
  this.formvalue.controls['Email'].setValue(tvr.Email);
  this.formvalue.controls['Mobile'].setValue(tvr.Mobile);
  this.formvalue.controls['Country'].setValue(tvr.Country);
}
updateTravellerDetails()
{
  this.travellerModelObj.Firstname=this.formvalue.value.Firstname;
  this.travellerModelObj.Lastname=this.formvalue.value.Lastname;
  this.travellerModelObj.Address=this.formvalue.value.Address;
  this.travellerModelObj.Email=this.formvalue.value.Email;
  this.travellerModelObj.Mobile=this.formvalue.value.Mobile;
  this.travellerModelObj.Country=this.formvalue.value.Country;

  this.api.updateTraveller(this.travellerModelObj,this.travellerModelObj.Id)
  .subscribe(res=>{
    alert("Record Updated Successfully");
    let ref=document.getElementById('cancel')
    ref?.click();
    this.formvalue.reset();
    this.getTravellerDetails();
  })
}
}