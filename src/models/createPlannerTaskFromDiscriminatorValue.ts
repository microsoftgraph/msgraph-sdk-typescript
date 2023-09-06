import { deserializeIntoPlannerTask } from './deserializeIntoPlannerTask';
import { type PlannerTask } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPlannerTaskFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPlannerTask;
}
