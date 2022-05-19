import {ChecklistItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChecklistItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChecklistItem {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChecklistItem();
}
