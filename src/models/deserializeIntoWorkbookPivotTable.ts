import { createWorkbookWorksheetFromDiscriminatorValue } from './createWorkbookWorksheetFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { serializeWorkbookWorksheet } from './serializeWorkbookWorksheet';
import { type WorkbookPivotTable } from './workbookPivotTable';
import { type WorkbookWorksheet } from './workbookWorksheet';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookPivotTable(workbookPivotTable: WorkbookPivotTable | undefined = {} as WorkbookPivotTable) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookPivotTable),
        "name": n => { workbookPivotTable.name = n.getStringValue(); },
        "worksheet": n => { workbookPivotTable.worksheet = n.getObjectValue<WorkbookWorksheet>(createWorkbookWorksheetFromDiscriminatorValue); },
    }
}
