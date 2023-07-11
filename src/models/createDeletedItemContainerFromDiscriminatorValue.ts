import {deserializeIntoDeletedItemContainer} from './deserializeIntoDeletedItemContainer';
import {DeletedItemContainer} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeletedItemContainerFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeletedItemContainer;
}
