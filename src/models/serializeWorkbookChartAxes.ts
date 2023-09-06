import { serializeEntity } from './serializeEntity';
import { serializeWorkbookChartAxis } from './serializeWorkbookChartAxis';
import { type WorkbookChartAxes } from './workbookChartAxes';
import { type WorkbookChartAxis } from './workbookChartAxis';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartAxes(writer: SerializationWriter, workbookChartAxes: WorkbookChartAxes | undefined = {} as WorkbookChartAxes) : void {
        serializeEntity(writer, workbookChartAxes)
        writer.writeObjectValue<WorkbookChartAxis>("categoryAxis", workbookChartAxes.categoryAxis, serializeWorkbookChartAxis);
        writer.writeObjectValue<WorkbookChartAxis>("seriesAxis", workbookChartAxes.seriesAxis, serializeWorkbookChartAxis);
        writer.writeObjectValue<WorkbookChartAxis>("valueAxis", workbookChartAxes.valueAxis, serializeWorkbookChartAxis);
}
