import {PlannerAppliedCategories} from './plannerAppliedCategories';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerAppliedCategories(plannerAppliedCategories: PlannerAppliedCategories | undefined = {} as PlannerAppliedCategories) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { plannerAppliedCategories.odataType = n.getStringValue(); },
    }
}
