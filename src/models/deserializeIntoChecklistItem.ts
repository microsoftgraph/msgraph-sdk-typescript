import {ChecklistItem} from './checklistItem';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChecklistItem(checklistItem: ChecklistItem | undefined = {} as ChecklistItem) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(checklistItem),
        "checkedDateTime": n => { checklistItem.checkedDateTime = n.getDateValue(); },
        "createdDateTime": n => { checklistItem.createdDateTime = n.getDateValue(); },
        "displayName": n => { checklistItem.displayName = n.getStringValue(); },
        "isChecked": n => { checklistItem.isChecked = n.getBooleanValue(); },
    }
}
