import {serializeEntity} from './serializeEntity';
import {serializeWorkbookChart} from './serializeWorkbookChart';
import {serializeWorkbookNamedItem} from './serializeWorkbookNamedItem';
import {serializeWorkbookPivotTable} from './serializeWorkbookPivotTable';
import {serializeWorkbookTable} from './serializeWorkbookTable';
import {serializeWorkbookWorksheetProtection} from './serializeWorkbookWorksheetProtection';
import {WorkbookChart} from './workbookChart';
import {WorkbookNamedItem} from './workbookNamedItem';
import {WorkbookPivotTable} from './workbookPivotTable';
import {WorkbookTable} from './workbookTable';
import {WorkbookWorksheet} from './workbookWorksheet';
import {WorkbookWorksheetProtection} from './workbookWorksheetProtection';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

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
