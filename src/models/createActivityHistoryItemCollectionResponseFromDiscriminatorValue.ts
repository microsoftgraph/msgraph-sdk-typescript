import {ActivityHistoryItemCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createActivityHistoryItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ActivityHistoryItemCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ActivityHistoryItemCollectionResponseImpl();
}
