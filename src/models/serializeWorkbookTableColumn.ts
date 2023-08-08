import type {Json} from './json';
import {serializeEntity} from './serializeEntity';
import {serializeJson} from './serializeJson';
import {serializeWorkbookFilter} from './serializeWorkbookFilter';
import type {WorkbookFilter} from './workbookFilter';
import type {WorkbookTableColumn} from './workbookTableColumn';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookTableColumn(writer: SerializationWriter, workbookTableColumn: WorkbookTableColumn | undefined = {} as WorkbookTableColumn) : void {
        serializeEntity(writer, workbookTableColumn)
        writer.writeObjectValue<WorkbookFilter>("filter", workbookTableColumn.filter, serializeWorkbookFilter);
        writer.writeNumberValue("index", workbookTableColumn.index);
        writer.writeStringValue("name", workbookTableColumn.name);
        writer.writeObjectValue<Json>("values", workbookTableColumn.values, serializeJson);
}
