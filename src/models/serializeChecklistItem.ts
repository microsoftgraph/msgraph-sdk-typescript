import {ChecklistItem} from './checklistItem';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChecklistItem(writer: SerializationWriter, checklistItem: ChecklistItem | undefined = {} as ChecklistItem) : void {
        serializeEntity(writer, checklistItem)
        writer.writeDateValue("checkedDateTime", checklistItem.checkedDateTime);
        writer.writeDateValue("createdDateTime", checklistItem.createdDateTime);
        writer.writeStringValue("displayName", checklistItem.displayName);
        writer.writeBooleanValue("isChecked", checklistItem.isChecked);
}
