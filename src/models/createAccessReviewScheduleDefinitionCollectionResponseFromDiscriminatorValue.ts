import { deserializeIntoAccessReviewScheduleDefinitionCollectionResponse } from './deserializeIntoAccessReviewScheduleDefinitionCollectionResponse';
import { type AccessReviewScheduleDefinitionCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessReviewScheduleDefinitionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessReviewScheduleDefinitionCollectionResponse;
}
