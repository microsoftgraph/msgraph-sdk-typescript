import {deserializeIntoAccessReviewScheduleDefinitionCollectionResponse} from './deserializeIntoAccessReviewScheduleDefinitionCollectionResponse';
import {AccessReviewScheduleDefinitionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewScheduleDefinitionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessReviewScheduleDefinitionCollectionResponse;
}
