import { createServicePlanInfoFromDiscriminatorValue } from './createServicePlanInfoFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type LicenseDetails } from './licenseDetails';
import { serializeServicePlanInfo } from './serializeServicePlanInfo';
import { type ServicePlanInfo } from './servicePlanInfo';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';
import { Guid } from 'guid-typescript';

export function deserializeIntoLicenseDetails(licenseDetails: LicenseDetails | undefined = {} as LicenseDetails) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(licenseDetails),
        "servicePlans": n => { licenseDetails.servicePlans = n.getCollectionOfObjectValues<ServicePlanInfo>(createServicePlanInfoFromDiscriminatorValue); },
        "skuId": n => { licenseDetails.skuId = n.getGuidValue(); },
        "skuPartNumber": n => { licenseDetails.skuPartNumber = n.getStringValue(); },
    }
}
