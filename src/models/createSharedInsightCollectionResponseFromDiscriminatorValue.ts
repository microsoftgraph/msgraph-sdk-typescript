import {deserializeIntoSharedInsightCollectionResponse} from './deserializeIntoSharedInsightCollectionResponse';
import {SharedInsightCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharedInsightCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSharedInsightCollectionResponse;
}
