import {createWorkbookTableColumnFromDiscriminatorValue} from './createWorkbookTableColumnFromDiscriminatorValue';
import {createWorkbookTableRowFromDiscriminatorValue} from './createWorkbookTableRowFromDiscriminatorValue';
import {createWorkbookTableSortFromDiscriminatorValue} from './createWorkbookTableSortFromDiscriminatorValue';
import {createWorkbookWorksheetFromDiscriminatorValue} from './createWorkbookWorksheetFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
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

export function deserializeIntoWorkbookTable(workbookTable: WorkbookTable | undefined = {} as WorkbookTable) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookTable),
        "columns": n => { workbookTable.columns = n.getCollectionOfObjectValues<WorkbookTableColumn>(createWorkbookTableColumnFromDiscriminatorValue); },
        "highlightFirstColumn": n => { workbookTable.highlightFirstColumn = n.getBooleanValue(); },
        "highlightLastColumn": n => { workbookTable.highlightLastColumn = n.getBooleanValue(); },
        "legacyId": n => { workbookTable.legacyId = n.getStringValue(); },
        "name": n => { workbookTable.name = n.getStringValue(); },
        "rows": n => { workbookTable.rows = n.getCollectionOfObjectValues<WorkbookTableRow>(createWorkbookTableRowFromDiscriminatorValue); },
        "showBandedColumns": n => { workbookTable.showBandedColumns = n.getBooleanValue(); },
        "showBandedRows": n => { workbookTable.showBandedRows = n.getBooleanValue(); },
        "showFilterButton": n => { workbookTable.showFilterButton = n.getBooleanValue(); },
        "showHeaders": n => { workbookTable.showHeaders = n.getBooleanValue(); },
        "showTotals": n => { workbookTable.showTotals = n.getBooleanValue(); },
        "sort": n => { workbookTable.sort = n.getObjectValue<WorkbookTableSort>(createWorkbookTableSortFromDiscriminatorValue); },
        "style": n => { workbookTable.style = n.getStringValue(); },
        "worksheet": n => { workbookTable.worksheet = n.getObjectValue<WorkbookWorksheet>(createWorkbookWorksheetFromDiscriminatorValue); },
    }
}
