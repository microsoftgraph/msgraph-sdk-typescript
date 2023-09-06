import { type LicenseDetails } from './licenseDetails';
import { serializeEntity } from './serializeEntity';
import { serializeServicePlanInfo } from './serializeServicePlanInfo';
import { type ServicePlanInfo } from './servicePlanInfo';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';
import { Guid } from 'guid-typescript';

export function serializeLicenseDetails(writer: SerializationWriter, licenseDetails: LicenseDetails | undefined = {} as LicenseDetails) : void {
        serializeEntity(writer, licenseDetails)
        writer.writeCollectionOfObjectValues<ServicePlanInfo>("servicePlans", licenseDetails.servicePlans, serializeServicePlanInfo);
        writer.writeGuidValue("skuId", licenseDetails.skuId);
        writer.writeStringValue("skuPartNumber", licenseDetails.skuPartNumber);
}
