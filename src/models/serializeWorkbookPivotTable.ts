import {serializeEntity} from './serializeEntity';
import {serializeWorkbookWorksheet} from './serializeWorkbookWorksheet';
import type {WorkbookPivotTable} from './workbookPivotTable';
import type {WorkbookWorksheet} from './workbookWorksheet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookPivotTable(writer: SerializationWriter, workbookPivotTable: WorkbookPivotTable | undefined = {} as WorkbookPivotTable) : void {
        serializeEntity(writer, workbookPivotTable)
        writer.writeStringValue("name", workbookPivotTable.name);
        writer.writeObjectValue<WorkbookWorksheet>("worksheet", workbookPivotTable.worksheet, serializeWorkbookWorksheet);
}
