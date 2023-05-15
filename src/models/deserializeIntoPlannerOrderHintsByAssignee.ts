import {PlannerOrderHintsByAssignee} from './plannerOrderHintsByAssignee';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerOrderHintsByAssignee(plannerOrderHintsByAssignee: PlannerOrderHintsByAssignee | undefined = {} as PlannerOrderHintsByAssignee) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { plannerOrderHintsByAssignee.odataType = n.getStringValue(); },
    }
}
