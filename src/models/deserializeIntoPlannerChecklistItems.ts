import {PlannerChecklistItems} from './plannerChecklistItems';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerChecklistItems(plannerChecklistItems: PlannerChecklistItems | undefined = {} as PlannerChecklistItems) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { plannerChecklistItems.odataType = n.getStringValue(); },
    }
}
