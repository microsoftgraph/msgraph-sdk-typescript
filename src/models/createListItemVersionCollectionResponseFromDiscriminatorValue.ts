import {deserializeIntoListItemVersionCollectionResponse} from './deserializeIntoListItemVersionCollectionResponse';
import {ListItemVersionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createListItemVersionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoListItemVersionCollectionResponse;
}
