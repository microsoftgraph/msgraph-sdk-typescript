import {SharedInsightCollectionResponse} from './sharedInsightCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharedInsightCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SharedInsightCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SharedInsightCollectionResponse();
}
