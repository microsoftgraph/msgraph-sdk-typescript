import { serializeEntity } from './serializeEntity';
import { serializeWorkbookChartLegendFormat } from './serializeWorkbookChartLegendFormat';
import { type WorkbookChartLegend } from './workbookChartLegend';
import { type WorkbookChartLegendFormat } from './workbookChartLegendFormat';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartLegend(writer: SerializationWriter, workbookChartLegend: WorkbookChartLegend | undefined = {} as WorkbookChartLegend) : void {
        serializeEntity(writer, workbookChartLegend)
        writer.writeObjectValue<WorkbookChartLegendFormat>("format", workbookChartLegend.format, serializeWorkbookChartLegendFormat);
        writer.writeBooleanValue("overlay", workbookChartLegend.overlay);
        writer.writeStringValue("position", workbookChartLegend.position);
        writer.writeBooleanValue("visible", workbookChartLegend.visible);
}
