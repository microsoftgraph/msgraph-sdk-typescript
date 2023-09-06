import { deserializeIntoChecklistItem } from './deserializeIntoChecklistItem';
import { type ChecklistItem } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createChecklistItemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChecklistItem;
}
