import {deserializeIntoAccessReviewHistoryDefinitionCollectionResponse} from './deserializeIntoAccessReviewHistoryDefinitionCollectionResponse';
import {AccessReviewHistoryDefinitionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewHistoryDefinitionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessReviewHistoryDefinitionCollectionResponse;
}
