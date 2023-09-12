import { deserializeIntoPlanner } from './deserializeIntoPlanner';
import { type Planner } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPlannerFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPlanner;
}
