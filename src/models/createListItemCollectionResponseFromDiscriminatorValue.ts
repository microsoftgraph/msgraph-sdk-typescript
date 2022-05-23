import {ListItemCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createListItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ListItemCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ListItemCollectionResponseImpl();
}
