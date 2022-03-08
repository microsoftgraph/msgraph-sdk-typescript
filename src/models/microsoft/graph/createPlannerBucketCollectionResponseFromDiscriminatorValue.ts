import {PlannerBucketCollectionResponse} from './plannerBucketCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerBucketCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerBucketCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerBucketCollectionResponse();
}
