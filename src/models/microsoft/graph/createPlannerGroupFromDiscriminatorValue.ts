import {PlannerGroup} from './plannerGroup';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerGroupFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerGroup {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerGroup();
}
