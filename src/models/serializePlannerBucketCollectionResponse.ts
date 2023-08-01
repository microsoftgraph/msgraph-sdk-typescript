import type {PlannerBucket} from './plannerBucket';
import type {PlannerBucketCollectionResponse} from './plannerBucketCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePlannerBucket} from './serializePlannerBucket';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlannerBucketCollectionResponse(writer: SerializationWriter, plannerBucketCollectionResponse: PlannerBucketCollectionResponse | undefined = {} as PlannerBucketCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, plannerBucketCollectionResponse)
        writer.writeCollectionOfObjectValues<PlannerBucket>("value", plannerBucketCollectionResponse.value, serializePlannerBucket);
}
