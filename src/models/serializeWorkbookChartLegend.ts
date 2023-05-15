import {serializeEntity} from './serializeEntity';
import {serializeWorkbookChartLegendFormat} from './serializeWorkbookChartLegendFormat';
import {WorkbookChartLegend} from './workbookChartLegend';
import {WorkbookChartLegendFormat} from './workbookChartLegendFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartLegend(writer: SerializationWriter, workbookChartLegend: WorkbookChartLegend | undefined = {} as WorkbookChartLegend) : void {
        serializeEntity(writer, workbookChartLegend)
        writer.writeObjectValue<WorkbookChartLegendFormat>("format", workbookChartLegend.format, serializeWorkbookChartLegendFormat);
        writer.writeBooleanValue("overlay", workbookChartLegend.overlay);
        writer.writeStringValue("position", workbookChartLegend.position);
        writer.writeBooleanValue("visible", workbookChartLegend.visible);
}
