import {deserializeIntoUsedInsightCollectionResponse} from './deserializeIntoUsedInsightCollectionResponse';
import {UsedInsightCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUsedInsightCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUsedInsightCollectionResponse;
}
