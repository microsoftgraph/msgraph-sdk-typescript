import { deserializeIntoListItemCollectionResponse } from './deserializeIntoListItemCollectionResponse';
import { type ListItemCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createListItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoListItemCollectionResponse;
}
