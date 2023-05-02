import {Json} from './json';
import {serializeEntity} from './serializeEntity';
import {serializeJson} from './serializeJson';
import {WorkbookTableRow} from './workbookTableRow';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookTableRow(writer: SerializationWriter, workbookTableRow: WorkbookTableRow | undefined = {} as WorkbookTableRow) : void {
        serializeEntity(writer, workbookTableRow)
        writer.writeNumberValue("index", workbookTableRow.index);
        writer.writeObjectValue<Json>("values", workbookTableRow.values, serializeJson);
}
