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

'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Sample transaction
 * @param {org.example.dawa.Counterfeit} counterfeit
 * @transaction
 */
async function Counterfeit(counterfeit) {
    // Update the asset with the new value.
    counterfeit.asset.Counterfeit = counterfeit.CounterfeitNewVal;
    // Get the asset registry for the asset.
    const assetRegistry = await getAssetRegistry('org.example.dawa.PharmaceuticalProduct');
    // Update the asset in the asset registry.
    await assetRegistry.update(counterfeit.asset);
}

/**
 * Sample transaction
 * @param {org.example.dawa.Completed} completed
 * @transaction
 */
async function Completed(completed) {
    // Update the asset with the new value.
    completed.asset.Completed = completed.CompletedNewVal;
    // Get the asset registry for the asset.
    const assetRegistry = await getAssetRegistry('org.example.dawa.PharmaceuticalProduct');
    // Update the asset in the asset registry.
    await assetRegistry.update(completed.asset);
}

/**
 * Sample transaction
 * @param {org.example.dawa.ProductTxs} productTxs
 * @transaction
 */
async function ProductTxs(productTxs) {
    // Update the asset with the new value.
    productTxs.asset.Latitude = productTxs.LatNewVal;
    productTxs.asset.Longitude = productTxs.LongNewVal;
    productTxs.asset.Status = productTxs.StatusNewVal;
    // Get the asset registry for the asset.
    const assetRegistry = await getAssetRegistry('org.example.dawa.PharmaceuticalProduct');
    // Update the asset in the asset registry.
    await assetRegistry.update(productTxs.asset);
}
