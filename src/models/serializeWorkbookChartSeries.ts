import { serializeEntity } from './serializeEntity';
import { serializeWorkbookChartPoint } from './serializeWorkbookChartPoint';
import { serializeWorkbookChartSeriesFormat } from './serializeWorkbookChartSeriesFormat';
import { type WorkbookChartPoint } from './workbookChartPoint';
import { type WorkbookChartSeries } from './workbookChartSeries';
import { type WorkbookChartSeriesFormat } from './workbookChartSeriesFormat';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartSeries(writer: SerializationWriter, workbookChartSeries: WorkbookChartSeries | undefined = {} as WorkbookChartSeries) : void {
        serializeEntity(writer, workbookChartSeries)
        writer.writeObjectValue<WorkbookChartSeriesFormat>("format", workbookChartSeries.format, serializeWorkbookChartSeriesFormat);
        writer.writeStringValue("name", workbookChartSeries.name);
        writer.writeCollectionOfObjectValues<WorkbookChartPoint>("points", workbookChartSeries.points, serializeWorkbookChartPoint);
}
