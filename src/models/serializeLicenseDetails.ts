import {LicenseDetails} from './licenseDetails';
import {serializeEntity} from './serializeEntity';
import {serializeServicePlanInfo} from './serializeServicePlanInfo';
import {ServicePlanInfo} from './servicePlanInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLicenseDetails(writer: SerializationWriter, licenseDetails: LicenseDetails | undefined = {} as LicenseDetails) : void {
        serializeEntity(writer, licenseDetails)
        writer.writeCollectionOfObjectValues<ServicePlanInfo>("servicePlans", licenseDetails.servicePlans, serializeServicePlanInfo);
        writer.writeStringValue("skuId", licenseDetails.skuId);
        writer.writeStringValue("skuPartNumber", licenseDetails.skuPartNumber);
}
