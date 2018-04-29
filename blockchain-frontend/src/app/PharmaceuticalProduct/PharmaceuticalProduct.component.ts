/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PharmaceuticalProductService } from './PharmaceuticalProduct.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-PharmaceuticalProduct',
	templateUrl: './PharmaceuticalProduct.component.html',
	styleUrls: ['./PharmaceuticalProduct.component.css'],
  providers: [PharmaceuticalProductService]
})
export class PharmaceuticalProductComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          PharmaceuticalProductId = new FormControl("", Validators.required);
        
  
      
          ProductName = new FormControl("", Validators.required);
        
  
      
          Price = new FormControl("", Validators.required);
        
  
      
          Creation = new FormControl("", Validators.required);
        
  
      
          Expiration = new FormControl("", Validators.required);
        
  
      
          Latitude = new FormControl("", Validators.required);
        
  
      
          Longitude = new FormControl("", Validators.required);
        
  
      
          Counterfeit = new FormControl("", Validators.required);
        
  
      
          Completed = new FormControl("", Validators.required);
        
  
      
          Status = new FormControl("", Validators.required);
        
  
      
          manufacturer = new FormControl("", Validators.required);
        
  
      
          distributor = new FormControl("", Validators.required);
        
  


  constructor(private servicePharmaceuticalProduct:PharmaceuticalProductService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          PharmaceuticalProductId:this.PharmaceuticalProductId,
        
    
        
          ProductName:this.ProductName,
        
    
        
          Price:this.Price,
        
    
        
          Creation:this.Creation,
        
    
        
          Expiration:this.Expiration,
        
    
        
          Latitude:this.Latitude,
        
    
        
          Longitude:this.Longitude,
        
    
        
          Counterfeit:this.Counterfeit,
        
    
        
          Completed:this.Completed,
        
    
        
          Status:this.Status,
        
    
        
          manufacturer:this.manufacturer,
        
    
        
          distributor:this.distributor
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.servicePharmaceuticalProduct.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the asset field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addAsset(form: any): Promise<any> {
    this.asset = {
      $class: "org.example.dawa.PharmaceuticalProduct",
      
        
          "PharmaceuticalProductId":this.PharmaceuticalProductId.value,
        
      
        
          "ProductName":this.ProductName.value,
        
      
        
          "Price":this.Price.value,
        
      
        
          "Creation":this.Creation.value,
        
      
        
          "Expiration":this.Expiration.value,
        
      
        
          "Latitude":this.Latitude.value,
        
      
        
          "Longitude":this.Longitude.value,
        
      
        
          "Counterfeit":this.Counterfeit.value,
        
      
        
          "Completed":this.Completed.value,
        
      
        
          "Status":this.Status.value,
        
      
        
          "manufacturer":this.manufacturer.value,
        
      
        
          "distributor":this.distributor.value
        
      
    };

    this.myForm.setValue({
      
        
          "PharmaceuticalProductId":null,
        
      
        
          "ProductName":null,
        
      
        
          "Price":null,
        
      
        
          "Creation":null,
        
      
        
          "Expiration":null,
        
      
        
          "Latitude":null,
        
      
        
          "Longitude":null,
        
      
        
          "Counterfeit":null,
        
      
        
          "Completed":null,
        
      
        
          "Status":null,
        
      
        
          "manufacturer":null,
        
      
        
          "distributor":null
        
      
    });

    return this.servicePharmaceuticalProduct.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "PharmaceuticalProductId":null,
        
      
        
          "ProductName":null,
        
      
        
          "Price":null,
        
      
        
          "Creation":null,
        
      
        
          "Expiration":null,
        
      
        
          "Latitude":null,
        
      
        
          "Longitude":null,
        
      
        
          "Counterfeit":null,
        
      
        
          "Completed":null,
        
      
        
          "Status":null,
        
      
        
          "manufacturer":null,
        
      
        
          "distributor":null 
        
      
      });
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else{
            this.errorMessage = error;
        }
    });
  }


   updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: "org.example.dawa.PharmaceuticalProduct",
      
        
          
        
    
        
          
            "ProductName":this.ProductName.value,
          
        
    
        
          
            "Price":this.Price.value,
          
        
    
        
          
            "Creation":this.Creation.value,
          
        
    
        
          
            "Expiration":this.Expiration.value,
          
        
    
        
          
            "Latitude":this.Latitude.value,
          
        
    
        
          
            "Longitude":this.Longitude.value,
          
        
    
        
          
            "Counterfeit":this.Counterfeit.value,
          
        
    
        
          
            "Completed":this.Completed.value,
          
        
    
        
          
            "Status":this.Status.value,
          
        
    
        
          
            "manufacturer":this.manufacturer.value,
          
        
    
        
          
            "distributor":this.distributor.value
          
        
    
    };

    return this.servicePharmaceuticalProduct.updateAsset(form.get("PharmaceuticalProductId").value,this.asset)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
            else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }


  deleteAsset(): Promise<any> {

    return this.servicePharmaceuticalProduct.deleteAsset(this.currentId)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
			else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }

  setId(id: any): void{
    this.currentId = id;
  }

  getForm(id: any): Promise<any>{

    return this.servicePharmaceuticalProduct.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "PharmaceuticalProductId":null,
          
        
          
            "ProductName":null,
          
        
          
            "Price":null,
          
        
          
            "Creation":null,
          
        
          
            "Expiration":null,
          
        
          
            "Latitude":null,
          
        
          
            "Longitude":null,
          
        
          
            "Counterfeit":null,
          
        
          
            "Completed":null,
          
        
          
            "Status":null,
          
        
          
            "manufacturer":null,
          
        
          
            "distributor":null 
          
        
      };



      
        if(result.PharmaceuticalProductId){
          
            formObject.PharmaceuticalProductId = result.PharmaceuticalProductId;
          
        }else{
          formObject.PharmaceuticalProductId = null;
        }
      
        if(result.ProductName){
          
            formObject.ProductName = result.ProductName;
          
        }else{
          formObject.ProductName = null;
        }
      
        if(result.Price){
          
            formObject.Price = result.Price;
          
        }else{
          formObject.Price = null;
        }
      
        if(result.Creation){
          
            formObject.Creation = result.Creation;
          
        }else{
          formObject.Creation = null;
        }
      
        if(result.Expiration){
          
            formObject.Expiration = result.Expiration;
          
        }else{
          formObject.Expiration = null;
        }
      
        if(result.Latitude){
          
            formObject.Latitude = result.Latitude;
          
        }else{
          formObject.Latitude = null;
        }
      
        if(result.Longitude){
          
            formObject.Longitude = result.Longitude;
          
        }else{
          formObject.Longitude = null;
        }
      
        if(result.Counterfeit){
          
            formObject.Counterfeit = result.Counterfeit;
          
        }else{
          formObject.Counterfeit = null;
        }
      
        if(result.Completed){
          
            formObject.Completed = result.Completed;
          
        }else{
          formObject.Completed = null;
        }
      
        if(result.Status){
          
            formObject.Status = result.Status;
          
        }else{
          formObject.Status = null;
        }
      
        if(result.manufacturer){
          
            formObject.manufacturer = result.manufacturer;
          
        }else{
          formObject.manufacturer = null;
        }
      
        if(result.distributor){
          
            formObject.distributor = result.distributor;
          
        }else{
          formObject.distributor = null;
        }
      

      this.myForm.setValue(formObject);

    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });

  }

  resetForm(): void{
    this.myForm.setValue({
      
        
          "PharmaceuticalProductId":null,
        
      
        
          "ProductName":null,
        
      
        
          "Price":null,
        
      
        
          "Creation":null,
        
      
        
          "Expiration":null,
        
      
        
          "Latitude":null,
        
      
        
          "Longitude":null,
        
      
        
          "Counterfeit":null,
        
      
        
          "Completed":null,
        
      
        
          "Status":null,
        
      
        
          "manufacturer":null,
        
      
        
          "distributor":null 
        
      
      });
  }

}
