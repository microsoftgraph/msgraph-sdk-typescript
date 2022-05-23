import {ListItemVersionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createListItemVersionFromDiscriminatorValue(parseNode: ParseNode | undefined) : ListItemVersionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ListItemVersionImpl();
}
