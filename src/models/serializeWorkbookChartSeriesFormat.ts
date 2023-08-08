import {serializeEntity} from './serializeEntity';
import {serializeWorkbookChartFill} from './serializeWorkbookChartFill';
import {serializeWorkbookChartLineFormat} from './serializeWorkbookChartLineFormat';
import type {WorkbookChartFill} from './workbookChartFill';
import type {WorkbookChartLineFormat} from './workbookChartLineFormat';
import type {WorkbookChartSeriesFormat} from './workbookChartSeriesFormat';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartSeriesFormat(writer: SerializationWriter, workbookChartSeriesFormat: WorkbookChartSeriesFormat | undefined = {} as WorkbookChartSeriesFormat) : void {
        serializeEntity(writer, workbookChartSeriesFormat)
        writer.writeObjectValue<WorkbookChartFill>("fill", workbookChartSeriesFormat.fill, serializeWorkbookChartFill);
        writer.writeObjectValue<WorkbookChartLineFormat>("line", workbookChartSeriesFormat.line, serializeWorkbookChartLineFormat);
}
