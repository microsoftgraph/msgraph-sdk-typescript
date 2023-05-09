import {createJsonFromDiscriminatorValue} from './createJsonFromDiscriminatorValue';
import {createWorkbookRangeFormatFromDiscriminatorValue} from './createWorkbookRangeFormatFromDiscriminatorValue';
import {createWorkbookRangeSortFromDiscriminatorValue} from './createWorkbookRangeSortFromDiscriminatorValue';
import {createWorkbookWorksheetFromDiscriminatorValue} from './createWorkbookWorksheetFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Json} from './json';
import {serializeJson} from './serializeJson';
import {serializeWorkbookRangeFormat} from './serializeWorkbookRangeFormat';
import {serializeWorkbookRangeSort} from './serializeWorkbookRangeSort';
import {serializeWorkbookWorksheet} from './serializeWorkbookWorksheet';
import {WorkbookRange} from './workbookRange';
import {WorkbookRangeFormat} from './workbookRangeFormat';
import {WorkbookRangeSort} from './workbookRangeSort';
import {WorkbookWorksheet} from './workbookWorksheet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookRange(workbookRange: WorkbookRange | undefined = {} as WorkbookRange) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookRange),
        "address": n => { workbookRange.address = n.getStringValue(); },
        "addressLocal": n => { workbookRange.addressLocal = n.getStringValue(); },
        "cellCount": n => { workbookRange.cellCount = n.getNumberValue(); },
        "columnCount": n => { workbookRange.columnCount = n.getNumberValue(); },
        "columnHidden": n => { workbookRange.columnHidden = n.getBooleanValue(); },
        "columnIndex": n => { workbookRange.columnIndex = n.getNumberValue(); },
        "format": n => { workbookRange.format = n.getObjectValue<WorkbookRangeFormat>(createWorkbookRangeFormatFromDiscriminatorValue); },
        "formulas": n => { workbookRange.formulas = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "formulasLocal": n => { workbookRange.formulasLocal = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "formulasR1C1": n => { workbookRange.formulasR1C1 = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "hidden": n => { workbookRange.hidden = n.getBooleanValue(); },
        "numberFormat": n => { workbookRange.numberFormat = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "rowCount": n => { workbookRange.rowCount = n.getNumberValue(); },
        "rowHidden": n => { workbookRange.rowHidden = n.getBooleanValue(); },
        "rowIndex": n => { workbookRange.rowIndex = n.getNumberValue(); },
        "sort": n => { workbookRange.sort = n.getObjectValue<WorkbookRangeSort>(createWorkbookRangeSortFromDiscriminatorValue); },
        "text": n => { workbookRange.text = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "values": n => { workbookRange.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "valueTypes": n => { workbookRange.valueTypes = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "worksheet": n => { workbookRange.worksheet = n.getObjectValue<WorkbookWorksheet>(createWorkbookWorksheetFromDiscriminatorValue); },
    }
}
