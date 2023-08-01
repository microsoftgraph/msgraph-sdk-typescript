import {serializeEntity} from './serializeEntity';
import {serializeWorkbookChartFill} from './serializeWorkbookChartFill';
import {serializeWorkbookChartFont} from './serializeWorkbookChartFont';
import type {WorkbookChartDataLabelFormat} from './workbookChartDataLabelFormat';
import type {WorkbookChartFill} from './workbookChartFill';
import type {WorkbookChartFont} from './workbookChartFont';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartDataLabelFormat(writer: SerializationWriter, workbookChartDataLabelFormat: WorkbookChartDataLabelFormat | undefined = {} as WorkbookChartDataLabelFormat) : void {
        serializeEntity(writer, workbookChartDataLabelFormat)
        writer.writeObjectValue<WorkbookChartFill>("fill", workbookChartDataLabelFormat.fill, serializeWorkbookChartFill);
        writer.writeObjectValue<WorkbookChartFont>("font", workbookChartDataLabelFormat.font, serializeWorkbookChartFont);
}
