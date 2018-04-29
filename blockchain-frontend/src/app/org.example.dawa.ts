import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.example.dawa{
   export class Manufacturer extends Participant {
      manufacturerId: string;
      name: string;
      location: string;
   }
   export enum Type {
      WHOLESALE,
      RETAIL,
   }
   export class Distributor extends Participant {
      distributorId: string;
      type: Type;
      name: string;
      location: string;
   }
   export class PharmaceuticalProduct extends Asset {
      PharmaceuticalProductId: string;
      ProductName: string;
      Price: number;
      Creation: Date;
      Expiration: Date;
      Latitude: number;
      Longitude: number;
      Counterfeit: boolean;
      Completed: boolean;
      Status: string;
      manufacturer: Manufacturer;
      distributor: Distributor;
   }
   export class Counterfeit extends Transaction {
      asset: PharmaceuticalProduct;
      CounterfeitNewVal: boolean;
   }
   export class Completed extends Transaction {
      asset: PharmaceuticalProduct;
      CompletedNewVal: boolean;
   }
   export class ProductTxs extends Transaction {
      asset: PharmaceuticalProduct;
      LatNewVal: number;
      LongNewVal: number;
      StatusNewVal: string;
   }
// }
