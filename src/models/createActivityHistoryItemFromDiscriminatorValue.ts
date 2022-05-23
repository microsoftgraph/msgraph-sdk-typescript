import {ActivityHistoryItemImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createActivityHistoryItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : ActivityHistoryItemImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ActivityHistoryItemImpl();
}
