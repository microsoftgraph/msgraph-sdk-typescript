import {deserializeIntoChecklistItem} from './deserializeIntoChecklistItem';
import {ChecklistItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChecklistItemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChecklistItem;
}
