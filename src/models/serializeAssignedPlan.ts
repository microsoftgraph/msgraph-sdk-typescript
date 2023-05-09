import {AssignedPlan} from './assignedPlan';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssignedPlan(writer: SerializationWriter, assignedPlan: AssignedPlan | undefined = {} as AssignedPlan) : void {
        writer.writeDateValue("assignedDateTime", assignedPlan.assignedDateTime);
        writer.writeStringValue("capabilityStatus", assignedPlan.capabilityStatus);
        writer.writeStringValue("@odata.type", assignedPlan.odataType);
        writer.writeStringValue("service", assignedPlan.service);
        writer.writeStringValue("servicePlanId", assignedPlan.servicePlanId);
        writer.writeAdditionalData(assignedPlan.additionalData);
}
