import {LicenseUnitsDetail} from './licenseUnitsDetail';
import {serializeEntity} from './serializeEntity';
import {serializeLicenseUnitsDetail} from './serializeLicenseUnitsDetail';
import {serializeServicePlanInfo} from './serializeServicePlanInfo';
import {ServicePlanInfo} from './servicePlanInfo';
import {SubscribedSku} from './subscribedSku';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function serializeSubscribedSku(writer: SerializationWriter, subscribedSku: SubscribedSku | undefined = {} as SubscribedSku) : void {
        serializeEntity(writer, subscribedSku)
        writer.writeStringValue("accountId", subscribedSku.accountId);
        writer.writeStringValue("accountName", subscribedSku.accountName);
        writer.writeStringValue("appliesTo", subscribedSku.appliesTo);
        writer.writeStringValue("capabilityStatus", subscribedSku.capabilityStatus);
        writer.writeNumberValue("consumedUnits", subscribedSku.consumedUnits);
        writer.writeObjectValue<LicenseUnitsDetail>("prepaidUnits", subscribedSku.prepaidUnits, serializeLicenseUnitsDetail);
        writer.writeCollectionOfObjectValues<ServicePlanInfo>("servicePlans", subscribedSku.servicePlans, serializeServicePlanInfo);
        writer.writeGuidValue("skuId", subscribedSku.skuId);
        writer.writeStringValue("skuPartNumber", subscribedSku.skuPartNumber);
        writer.writeCollectionOfPrimitiveValues<string>("subscriptionIds", subscribedSku.subscriptionIds);
}
