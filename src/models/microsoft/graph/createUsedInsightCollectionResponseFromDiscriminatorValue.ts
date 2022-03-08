import {UsedInsightCollectionResponse} from './usedInsightCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUsedInsightCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UsedInsightCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UsedInsightCollectionResponse();
}
