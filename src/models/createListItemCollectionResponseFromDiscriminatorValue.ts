import {deserializeIntoListItemCollectionResponse} from './deserializeIntoListItemCollectionResponse';
import {ListItemCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createListItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoListItemCollectionResponse;
}
