import { type PlannerUserIds } from './plannerUserIds';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerUserIds(plannerUserIds: PlannerUserIds | undefined = {} as PlannerUserIds) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { plannerUserIds.odataType = n.getStringValue(); },
    }
}
