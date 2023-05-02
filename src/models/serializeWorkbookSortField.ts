import {serializeWorkbookIcon} from './serializeWorkbookIcon';
import {WorkbookIcon} from './workbookIcon';
import {WorkbookSortField} from './workbookSortField';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookSortField(writer: SerializationWriter, workbookSortField: WorkbookSortField | undefined = {} as WorkbookSortField) : void {
        writer.writeBooleanValue("ascending", workbookSortField.ascending);
        writer.writeStringValue("color", workbookSortField.color);
        writer.writeStringValue("dataOption", workbookSortField.dataOption);
        writer.writeObjectValue<WorkbookIcon>("icon", workbookSortField.icon, serializeWorkbookIcon);
        writer.writeNumberValue("key", workbookSortField.key);
        writer.writeStringValue("@odata.type", workbookSortField.odataType);
        writer.writeStringValue("sortOn", workbookSortField.sortOn);
        writer.writeAdditionalData(workbookSortField.additionalData);
}
