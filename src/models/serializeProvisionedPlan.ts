import { type ProvisionedPlan } from './provisionedPlan';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeProvisionedPlan(writer: SerializationWriter, provisionedPlan: ProvisionedPlan | undefined = {} as ProvisionedPlan) : void {
        writer.writeStringValue("capabilityStatus", provisionedPlan.capabilityStatus);
        writer.writeStringValue("@odata.type", provisionedPlan.odataType);
        writer.writeStringValue("provisioningStatus", provisionedPlan.provisioningStatus);
        writer.writeStringValue("service", provisionedPlan.service);
        writer.writeAdditionalData(provisionedPlan.additionalData);
}
