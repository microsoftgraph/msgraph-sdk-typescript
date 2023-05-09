import {Json} from './json';
import {serializeEntity} from './serializeEntity';
import {serializeJson} from './serializeJson';
import {WorkbookRangeView} from './workbookRangeView';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookRangeView(writer: SerializationWriter, workbookRangeView: WorkbookRangeView | undefined = {} as WorkbookRangeView) : void {
        serializeEntity(writer, workbookRangeView)
        writer.writeObjectValue<Json>("cellAddresses", workbookRangeView.cellAddresses, serializeJson);
        writer.writeNumberValue("columnCount", workbookRangeView.columnCount);
        writer.writeObjectValue<Json>("formulas", workbookRangeView.formulas, serializeJson);
        writer.writeObjectValue<Json>("formulasLocal", workbookRangeView.formulasLocal, serializeJson);
        writer.writeObjectValue<Json>("formulasR1C1", workbookRangeView.formulasR1C1, serializeJson);
        writer.writeNumberValue("index", workbookRangeView.index);
        writer.writeObjectValue<Json>("numberFormat", workbookRangeView.numberFormat, serializeJson);
        writer.writeNumberValue("rowCount", workbookRangeView.rowCount);
        writer.writeCollectionOfObjectValues<WorkbookRangeView>("rows", workbookRangeView.rows, serializeWorkbookRangeView);
        writer.writeObjectValue<Json>("text", workbookRangeView.text, serializeJson);
        writer.writeObjectValue<Json>("values", workbookRangeView.values, serializeJson);
        writer.writeObjectValue<Json>("valueTypes", workbookRangeView.valueTypes, serializeJson);
}
