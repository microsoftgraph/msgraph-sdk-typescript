import { type PlannerAssignments } from './plannerAssignments';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerAssignments(plannerAssignments: PlannerAssignments | undefined = {} as PlannerAssignments) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { plannerAssignments.odataType = n.getStringValue(); },
    }
}
