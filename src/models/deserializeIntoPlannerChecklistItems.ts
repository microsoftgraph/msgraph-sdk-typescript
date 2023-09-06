import { type PlannerChecklistItems } from './plannerChecklistItems';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerChecklistItems(plannerChecklistItems: PlannerChecklistItems | undefined = {} as PlannerChecklistItems) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { plannerChecklistItems.odataType = n.getStringValue(); },
    }
}
