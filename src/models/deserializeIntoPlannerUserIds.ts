import {PlannerUserIds} from './plannerUserIds';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerUserIds(plannerUserIds: PlannerUserIds | undefined = {} as PlannerUserIds) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { plannerUserIds.odataType = n.getStringValue(); },
    }
}
