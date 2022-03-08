import {ActivityHistoryItemCollectionResponse} from './activityHistoryItemCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createActivityHistoryItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ActivityHistoryItemCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ActivityHistoryItemCollectionResponse();
}
