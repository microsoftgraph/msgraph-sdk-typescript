import {AssignedPlan} from './assignedPlan';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function serializeAssignedPlan(writer: SerializationWriter, assignedPlan: AssignedPlan | undefined = {} as AssignedPlan) : void {
        writer.writeDateValue("assignedDateTime", assignedPlan.assignedDateTime);
        writer.writeStringValue("capabilityStatus", assignedPlan.capabilityStatus);
        writer.writeStringValue("@odata.type", assignedPlan.odataType);
        writer.writeStringValue("service", assignedPlan.service);
        writer.writeGuidValue("servicePlanId", assignedPlan.servicePlanId);
        writer.writeAdditionalData(assignedPlan.additionalData);
}
