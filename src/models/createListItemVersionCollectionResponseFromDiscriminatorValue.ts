import { deserializeIntoListItemVersionCollectionResponse } from './deserializeIntoListItemVersionCollectionResponse';
import { type ListItemVersionCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createListItemVersionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoListItemVersionCollectionResponse;
}
