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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TransactionComponent } from './Transaction/Transaction.component'
import { HomeComponent } from './home/home.component';

import { PharmaceuticalProductComponent } from './PharmaceuticalProduct/PharmaceuticalProduct.component';


  import { ManufacturerComponent } from './Manufacturer/Manufacturer.component';
  import { DistributorComponent } from './Distributor/Distributor.component';


  import { CounterfeitComponent } from './Counterfeit/Counterfeit.component';
  import { CompletedComponent } from './Completed/Completed.component';
  import { ProductTxsComponent } from './ProductTxs/ProductTxs.component';  
const routes: Routes = [
     //{ path: 'transaction', component: TransactionComponent },
    {path: '', component: HomeComponent},
		
		{ path: 'PharmaceuticalProduct', component: PharmaceuticalProductComponent},
    
    
      { path: 'Manufacturer', component: ManufacturerComponent},
      
      { path: 'Distributor', component: DistributorComponent},
      
      
        { path: 'Counterfeit', component: CounterfeitComponent},
        
        { path: 'Completed', component: CompletedComponent},
        
        { path: 'ProductTxs', component: ProductTxsComponent},
        
		{path: '**', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
