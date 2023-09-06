import { deserializeIntoPlannerGroup } from './deserializeIntoPlannerGroup';
import { type PlannerGroup } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPlannerGroupFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPlannerGroup;
}
