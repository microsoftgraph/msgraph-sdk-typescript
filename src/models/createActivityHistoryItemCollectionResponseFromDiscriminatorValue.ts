import {deserializeIntoActivityHistoryItemCollectionResponse} from './deserializeIntoActivityHistoryItemCollectionResponse';
import {ActivityHistoryItemCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createActivityHistoryItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoActivityHistoryItemCollectionResponse;
}
