import {deserializeIntoPlannerUser} from './deserializeIntoPlannerUser';
import {PlannerUser} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerUserFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPlannerUser;
}
