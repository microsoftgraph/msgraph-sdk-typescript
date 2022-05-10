import {ListItemVersionCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createListItemVersionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ListItemVersionCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ListItemVersionCollectionResponseImpl();
}
