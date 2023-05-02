import {deserializeIntoActivityHistoryItem} from './deserializeIntoActivityHistoryItem';
import {ActivityHistoryItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createActivityHistoryItemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoActivityHistoryItem;
}
