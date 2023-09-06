import { serializeEntity } from './serializeEntity';
import { serializeWorkbookChartFill } from './serializeWorkbookChartFill';
import { serializeWorkbookChartFont } from './serializeWorkbookChartFont';
import { type WorkbookChartFill } from './workbookChartFill';
import { type WorkbookChartFont } from './workbookChartFont';
import { type WorkbookChartLegendFormat } from './workbookChartLegendFormat';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartLegendFormat(writer: SerializationWriter, workbookChartLegendFormat: WorkbookChartLegendFormat | undefined = {} as WorkbookChartLegendFormat) : void {
        serializeEntity(writer, workbookChartLegendFormat)
        writer.writeObjectValue<WorkbookChartFill>("fill", workbookChartLegendFormat.fill, serializeWorkbookChartFill);
        writer.writeObjectValue<WorkbookChartFont>("font", workbookChartLegendFormat.font, serializeWorkbookChartFont);
}
