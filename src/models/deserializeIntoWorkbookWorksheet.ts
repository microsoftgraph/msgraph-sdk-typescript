import {createWorkbookChartFromDiscriminatorValue} from './createWorkbookChartFromDiscriminatorValue';
import {createWorkbookNamedItemFromDiscriminatorValue} from './createWorkbookNamedItemFromDiscriminatorValue';
import {createWorkbookPivotTableFromDiscriminatorValue} from './createWorkbookPivotTableFromDiscriminatorValue';
import {createWorkbookTableFromDiscriminatorValue} from './createWorkbookTableFromDiscriminatorValue';
import {createWorkbookWorksheetProtectionFromDiscriminatorValue} from './createWorkbookWorksheetProtectionFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
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

export function deserializeIntoWorkbookWorksheet(workbookWorksheet: WorkbookWorksheet | undefined = {} as WorkbookWorksheet) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookWorksheet),
        "charts": n => { workbookWorksheet.charts = n.getCollectionOfObjectValues<WorkbookChart>(createWorkbookChartFromDiscriminatorValue); },
        "name": n => { workbookWorksheet.name = n.getStringValue(); },
        "names": n => { workbookWorksheet.names = n.getCollectionOfObjectValues<WorkbookNamedItem>(createWorkbookNamedItemFromDiscriminatorValue); },
        "pivotTables": n => { workbookWorksheet.pivotTables = n.getCollectionOfObjectValues<WorkbookPivotTable>(createWorkbookPivotTableFromDiscriminatorValue); },
        "position": n => { workbookWorksheet.position = n.getNumberValue(); },
        "protection": n => { workbookWorksheet.protection = n.getObjectValue<WorkbookWorksheetProtection>(createWorkbookWorksheetProtectionFromDiscriminatorValue); },
        "tables": n => { workbookWorksheet.tables = n.getCollectionOfObjectValues<WorkbookTable>(createWorkbookTableFromDiscriminatorValue); },
        "visibility": n => { workbookWorksheet.visibility = n.getStringValue(); },
    }
}
