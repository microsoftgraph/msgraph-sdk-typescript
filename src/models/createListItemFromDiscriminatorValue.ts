import { deserializeIntoListItem } from './deserializeIntoListItem';
import { type ListItem } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createListItemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoListItem;
}
