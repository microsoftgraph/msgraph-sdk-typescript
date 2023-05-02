import {createServicePlanInfoFromDiscriminatorValue} from './createServicePlanInfoFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {LicenseDetails} from './licenseDetails';
import {serializeServicePlanInfo} from './serializeServicePlanInfo';
import {ServicePlanInfo} from './servicePlanInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLicenseDetails(licenseDetails: LicenseDetails | undefined = {} as LicenseDetails) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(licenseDetails),
        "servicePlans": n => { licenseDetails.servicePlans = n.getCollectionOfObjectValues<ServicePlanInfo>(createServicePlanInfoFromDiscriminatorValue); },
        "skuId": n => { licenseDetails.skuId = n.getStringValue(); },
        "skuPartNumber": n => { licenseDetails.skuPartNumber = n.getStringValue(); },
    }
}
