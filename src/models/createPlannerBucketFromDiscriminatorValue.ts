import {PlannerBucketImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerBucketFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerBucketImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerBucketImpl();
}
