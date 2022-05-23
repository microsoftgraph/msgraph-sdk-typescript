import {PlannerBucketCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerBucketCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerBucketCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerBucketCollectionResponseImpl();
}
