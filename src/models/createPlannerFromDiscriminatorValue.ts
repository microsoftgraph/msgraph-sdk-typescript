import {deserializeIntoPlanner} from './deserializeIntoPlanner';
import {Planner} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPlanner;
}
