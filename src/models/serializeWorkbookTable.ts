import {serializeEntity} from './serializeEntity';
import {serializeWorkbookTableColumn} from './serializeWorkbookTableColumn';
import {serializeWorkbookTableRow} from './serializeWorkbookTableRow';
import {serializeWorkbookTableSort} from './serializeWorkbookTableSort';
import {serializeWorkbookWorksheet} from './serializeWorkbookWorksheet';
import {WorkbookTable} from './workbookTable';
import {WorkbookTableColumn} from './workbookTableColumn';
import {WorkbookTableRow} from './workbookTableRow';
import {WorkbookTableSort} from './workbookTableSort';
import {WorkbookWorksheet} from './workbookWorksheet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookTable(writer: SerializationWriter, workbookTable: WorkbookTable | undefined = {} as WorkbookTable) : void {
        serializeEntity(writer, workbookTable)
        writer.writeCollectionOfObjectValues<WorkbookTableColumn>("columns", workbookTable.columns, serializeWorkbookTableColumn);
        writer.writeBooleanValue("highlightFirstColumn", workbookTable.highlightFirstColumn);
        writer.writeBooleanValue("highlightLastColumn", workbookTable.highlightLastColumn);
        writer.writeStringValue("legacyId", workbookTable.legacyId);
        writer.writeStringValue("name", workbookTable.name);
        writer.writeCollectionOfObjectValues<WorkbookTableRow>("rows", workbookTable.rows, serializeWorkbookTableRow);
        writer.writeBooleanValue("showBandedColumns", workbookTable.showBandedColumns);
        writer.writeBooleanValue("showBandedRows", workbookTable.showBandedRows);
        writer.writeBooleanValue("showFilterButton", workbookTable.showFilterButton);
        writer.writeBooleanValue("showHeaders", workbookTable.showHeaders);
        writer.writeBooleanValue("showTotals", workbookTable.showTotals);
        writer.writeObjectValue<WorkbookTableSort>("sort", workbookTable.sort, serializeWorkbookTableSort);
        writer.writeStringValue("style", workbookTable.style);
        writer.writeObjectValue<WorkbookWorksheet>("worksheet", workbookTable.worksheet, serializeWorkbookWorksheet);
}
