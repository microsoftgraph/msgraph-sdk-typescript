import {serializeEntity} from './serializeEntity';
import {serializeWorkbookChart} from './serializeWorkbookChart';
import {serializeWorkbookNamedItem} from './serializeWorkbookNamedItem';
import {serializeWorkbookPivotTable} from './serializeWorkbookPivotTable';
import {serializeWorkbookTable} from './serializeWorkbookTable';
import {serializeWorkbookWorksheetProtection} from './serializeWorkbookWorksheetProtection';
import type {WorkbookChart} from './workbookChart';
import type {WorkbookNamedItem} from './workbookNamedItem';
import type {WorkbookPivotTable} from './workbookPivotTable';
import type {WorkbookTable} from './workbookTable';
import type {WorkbookWorksheet} from './workbookWorksheet';
import type {WorkbookWorksheetProtection} from './workbookWorksheetProtection';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookWorksheet(writer: SerializationWriter, workbookWorksheet: WorkbookWorksheet | undefined = {} as WorkbookWorksheet) : void {
        serializeEntity(writer, workbookWorksheet)
        writer.writeCollectionOfObjectValues<WorkbookChart>("charts", workbookWorksheet.charts, serializeWorkbookChart);
        writer.writeStringValue("name", workbookWorksheet.name);
        writer.writeCollectionOfObjectValues<WorkbookNamedItem>("names", workbookWorksheet.names, serializeWorkbookNamedItem);
        writer.writeCollectionOfObjectValues<WorkbookPivotTable>("pivotTables", workbookWorksheet.pivotTables, serializeWorkbookPivotTable);
        writer.writeNumberValue("position", workbookWorksheet.position);
        writer.writeObjectValue<WorkbookWorksheetProtection>("protection", workbookWorksheet.protection, serializeWorkbookWorksheetProtection);
        writer.writeCollectionOfObjectValues<WorkbookTable>("tables", workbookWorksheet.tables, serializeWorkbookTable);
        writer.writeStringValue("visibility", workbookWorksheet.visibility);
}
