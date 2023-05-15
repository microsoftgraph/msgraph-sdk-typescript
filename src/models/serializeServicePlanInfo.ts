import {ServicePlanInfo} from './servicePlanInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeServicePlanInfo(writer: SerializationWriter, servicePlanInfo: ServicePlanInfo | undefined = {} as ServicePlanInfo) : void {
        writer.writeStringValue("appliesTo", servicePlanInfo.appliesTo);
        writer.writeStringValue("@odata.type", servicePlanInfo.odataType);
        writer.writeStringValue("provisioningStatus", servicePlanInfo.provisioningStatus);
        writer.writeStringValue("servicePlanId", servicePlanInfo.servicePlanId);
        writer.writeStringValue("servicePlanName", servicePlanInfo.servicePlanName);
        writer.writeAdditionalData(servicePlanInfo.additionalData);
}
