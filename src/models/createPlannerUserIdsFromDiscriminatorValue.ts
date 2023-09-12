import { deserializeIntoPlannerUserIds } from './deserializeIntoPlannerUserIds';
import { type PlannerUserIds } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPlannerUserIdsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPlannerUserIds;
}
