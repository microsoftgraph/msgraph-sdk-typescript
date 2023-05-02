import {deserializeIntoChecklistItemCollectionResponse} from './deserializeIntoChecklistItemCollectionResponse';
import {ChecklistItemCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChecklistItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChecklistItemCollectionResponse;
}
