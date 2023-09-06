import { type AssignedPlan } from './assignedPlan';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';
import { Guid } from 'guid-typescript';

export function deserializeIntoAssignedPlan(assignedPlan: AssignedPlan | undefined = {} as AssignedPlan) : Record<string, (node: ParseNode) => void> {
    return {
        "assignedDateTime": n => { assignedPlan.assignedDateTime = n.getDateValue(); },
        "capabilityStatus": n => { assignedPlan.capabilityStatus = n.getStringValue(); },
        "@odata.type": n => { assignedPlan.odataType = n.getStringValue(); },
        "service": n => { assignedPlan.service = n.getStringValue(); },
        "servicePlanId": n => { assignedPlan.servicePlanId = n.getGuidValue(); },
    }
}
