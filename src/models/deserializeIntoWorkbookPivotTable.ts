import {createWorkbookWorksheetFromDiscriminatorValue} from './createWorkbookWorksheetFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeWorkbookWorksheet} from './serializeWorkbookWorksheet';
import {WorkbookPivotTable} from './workbookPivotTable';
import {WorkbookWorksheet} from './workbookWorksheet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookPivotTable(workbookPivotTable: WorkbookPivotTable | undefined = {} as WorkbookPivotTable) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookPivotTable),
        "name": n => { workbookPivotTable.name = n.getStringValue(); },
        "worksheet": n => { workbookPivotTable.worksheet = n.getObjectValue<WorkbookWorksheet>(createWorkbookWorksheetFromDiscriminatorValue); },
    }
}
