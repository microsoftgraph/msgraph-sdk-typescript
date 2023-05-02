import {Json} from './json';
import {serializeEntity} from './serializeEntity';
import {serializeJson} from './serializeJson';
import {serializeWorkbookRangeFormat} from './serializeWorkbookRangeFormat';
import {serializeWorkbookRangeSort} from './serializeWorkbookRangeSort';
import {serializeWorkbookWorksheet} from './serializeWorkbookWorksheet';
import {WorkbookRange} from './workbookRange';
import {WorkbookRangeFormat} from './workbookRangeFormat';
import {WorkbookRangeSort} from './workbookRangeSort';
import {WorkbookWorksheet} from './workbookWorksheet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookRange(writer: SerializationWriter, workbookRange: WorkbookRange | undefined = {} as WorkbookRange) : void {
        serializeEntity(writer, workbookRange)
        writer.writeStringValue("address", workbookRange.address);
        writer.writeStringValue("addressLocal", workbookRange.addressLocal);
        writer.writeNumberValue("cellCount", workbookRange.cellCount);
        writer.writeNumberValue("columnCount", workbookRange.columnCount);
        writer.writeBooleanValue("columnHidden", workbookRange.columnHidden);
        writer.writeNumberValue("columnIndex", workbookRange.columnIndex);
        writer.writeObjectValue<WorkbookRangeFormat>("format", workbookRange.format, serializeWorkbookRangeFormat);
        writer.writeObjectValue<Json>("formulas", workbookRange.formulas, serializeJson);
        writer.writeObjectValue<Json>("formulasLocal", workbookRange.formulasLocal, serializeJson);
        writer.writeObjectValue<Json>("formulasR1C1", workbookRange.formulasR1C1, serializeJson);
        writer.writeBooleanValue("hidden", workbookRange.hidden);
        writer.writeObjectValue<Json>("numberFormat", workbookRange.numberFormat, serializeJson);
        writer.writeNumberValue("rowCount", workbookRange.rowCount);
        writer.writeBooleanValue("rowHidden", workbookRange.rowHidden);
        writer.writeNumberValue("rowIndex", workbookRange.rowIndex);
        writer.writeObjectValue<WorkbookRangeSort>("sort", workbookRange.sort, serializeWorkbookRangeSort);
        writer.writeObjectValue<Json>("text", workbookRange.text, serializeJson);
        writer.writeObjectValue<Json>("values", workbookRange.values, serializeJson);
        writer.writeObjectValue<Json>("valueTypes", workbookRange.valueTypes, serializeJson);
        writer.writeObjectValue<WorkbookWorksheet>("worksheet", workbookRange.worksheet, serializeWorkbookWorksheet);
}
