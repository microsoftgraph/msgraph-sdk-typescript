import { deserializeIntoChecklistItemCollectionResponse } from './deserializeIntoChecklistItemCollectionResponse';
import { type ChecklistItemCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createChecklistItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChecklistItemCollectionResponse;
}
