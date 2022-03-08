import {ActivityHistoryItem} from './activityHistoryItem';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createActivityHistoryItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : ActivityHistoryItem {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ActivityHistoryItem();
}
