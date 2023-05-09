import {Json} from './json';
import {serializeEntity} from './serializeEntity';
import {serializeJson} from './serializeJson';
import {serializeWorkbookWorksheet} from './serializeWorkbookWorksheet';
import {WorkbookNamedItem} from './workbookNamedItem';
import {WorkbookWorksheet} from './workbookWorksheet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookNamedItem(writer: SerializationWriter, workbookNamedItem: WorkbookNamedItem | undefined = {} as WorkbookNamedItem) : void {
        serializeEntity(writer, workbookNamedItem)
        writer.writeStringValue("comment", workbookNamedItem.comment);
        writer.writeStringValue("name", workbookNamedItem.name);
        writer.writeStringValue("scope", workbookNamedItem.scope);
        writer.writeStringValue("type", workbookNamedItem.type);
        writer.writeObjectValue<Json>("value", workbookNamedItem.value, serializeJson);
        writer.writeBooleanValue("visible", workbookNamedItem.visible);
        writer.writeObjectValue<WorkbookWorksheet>("worksheet", workbookNamedItem.worksheet, serializeWorkbookWorksheet);
}
