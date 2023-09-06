import { deserializeIntoActivityHistoryItemCollectionResponse } from './deserializeIntoActivityHistoryItemCollectionResponse';
import { type ActivityHistoryItemCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createActivityHistoryItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoActivityHistoryItemCollectionResponse;
}
