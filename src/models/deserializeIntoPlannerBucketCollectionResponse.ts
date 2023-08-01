import {createPlannerBucketFromDiscriminatorValue} from './createPlannerBucketFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {PlannerBucket} from './plannerBucket';
import type {PlannerBucketCollectionResponse} from './plannerBucketCollectionResponse';
import {serializePlannerBucket} from './serializePlannerBucket';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerBucketCollectionResponse(plannerBucketCollectionResponse: PlannerBucketCollectionResponse | undefined = {} as PlannerBucketCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(plannerBucketCollectionResponse),
        "value": n => { plannerBucketCollectionResponse.value = n.getCollectionOfObjectValues<PlannerBucket>(createPlannerBucketFromDiscriminatorValue); },
    }
}
