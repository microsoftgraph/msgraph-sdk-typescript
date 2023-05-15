import {deserializeIntoPlannerBucketCollectionResponse} from './deserializeIntoPlannerBucketCollectionResponse';
import {PlannerBucketCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerBucketCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPlannerBucketCollectionResponse;
}
