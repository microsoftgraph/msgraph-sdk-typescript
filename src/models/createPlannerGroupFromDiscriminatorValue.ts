import {deserializeIntoPlannerGroup} from './deserializeIntoPlannerGroup';
import {PlannerGroup} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerGroupFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPlannerGroup;
}
