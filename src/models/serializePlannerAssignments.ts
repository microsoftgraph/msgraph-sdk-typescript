import {PlannerAssignments} from './plannerAssignments';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlannerAssignments(writer: SerializationWriter, plannerAssignments: PlannerAssignments | undefined = {} as PlannerAssignments) : void {
        writer.writeStringValue("@odata.type", plannerAssignments.odataType);
        writer.writeAdditionalData(plannerAssignments.additionalData);
}
