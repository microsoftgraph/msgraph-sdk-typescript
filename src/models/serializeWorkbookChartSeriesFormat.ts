import {serializeEntity} from './serializeEntity';
import {serializeWorkbookChartFill} from './serializeWorkbookChartFill';
import {serializeWorkbookChartLineFormat} from './serializeWorkbookChartLineFormat';
import {WorkbookChartFill} from './workbookChartFill';
import {WorkbookChartLineFormat} from './workbookChartLineFormat';
import {WorkbookChartSeriesFormat} from './workbookChartSeriesFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartSeriesFormat(writer: SerializationWriter, workbookChartSeriesFormat: WorkbookChartSeriesFormat | undefined = {} as WorkbookChartSeriesFormat) : void {
        serializeEntity(writer, workbookChartSeriesFormat)
        writer.writeObjectValue<WorkbookChartFill>("fill", workbookChartSeriesFormat.fill, serializeWorkbookChartFill);
        writer.writeObjectValue<WorkbookChartLineFormat>("line", workbookChartSeriesFormat.line, serializeWorkbookChartLineFormat);
}
