import { deserializeIntoActivityHistoryItem } from './deserializeIntoActivityHistoryItem';
import { type ActivityHistoryItem } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createActivityHistoryItemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoActivityHistoryItem;
}
