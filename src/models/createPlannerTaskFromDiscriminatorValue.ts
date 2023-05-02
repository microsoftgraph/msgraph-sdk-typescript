import {deserializeIntoPlannerTask} from './deserializeIntoPlannerTask';
import {PlannerTask} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerTaskFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPlannerTask;
}
