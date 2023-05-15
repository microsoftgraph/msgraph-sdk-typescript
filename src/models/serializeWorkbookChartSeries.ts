import {serializeEntity} from './serializeEntity';
import {serializeWorkbookChartPoint} from './serializeWorkbookChartPoint';
import {serializeWorkbookChartSeriesFormat} from './serializeWorkbookChartSeriesFormat';
import {WorkbookChartPoint} from './workbookChartPoint';
import {WorkbookChartSeries} from './workbookChartSeries';
import {WorkbookChartSeriesFormat} from './workbookChartSeriesFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartSeries(writer: SerializationWriter, workbookChartSeries: WorkbookChartSeries | undefined = {} as WorkbookChartSeries) : void {
        serializeEntity(writer, workbookChartSeries)
        writer.writeObjectValue<WorkbookChartSeriesFormat>("format", workbookChartSeries.format, serializeWorkbookChartSeriesFormat);
        writer.writeStringValue("name", workbookChartSeries.name);
        writer.writeCollectionOfObjectValues<WorkbookChartPoint>("points", workbookChartSeries.points, serializeWorkbookChartPoint);
}
