import {ServicePlanInfo} from './servicePlanInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function serializeServicePlanInfo(writer: SerializationWriter, servicePlanInfo: ServicePlanInfo | undefined = {} as ServicePlanInfo) : void {
        writer.writeStringValue("appliesTo", servicePlanInfo.appliesTo);
        writer.writeStringValue("@odata.type", servicePlanInfo.odataType);
        writer.writeStringValue("provisioningStatus", servicePlanInfo.provisioningStatus);
        writer.writeGuidValue("servicePlanId", servicePlanInfo.servicePlanId);
        writer.writeStringValue("servicePlanName", servicePlanInfo.servicePlanName);
        writer.writeAdditionalData(servicePlanInfo.additionalData);
}
