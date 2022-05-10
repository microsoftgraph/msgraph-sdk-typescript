import {ListItemImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createListItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : ListItemImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ListItemImpl();
}
