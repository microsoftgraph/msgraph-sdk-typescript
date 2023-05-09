import {serializeEntity} from './serializeEntity';
import {serializeWorkbookChartFill} from './serializeWorkbookChartFill';
import {serializeWorkbookChartFont} from './serializeWorkbookChartFont';
import {WorkbookChartFill} from './workbookChartFill';
import {WorkbookChartFont} from './workbookChartFont';
import {WorkbookChartLegendFormat} from './workbookChartLegendFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartLegendFormat(writer: SerializationWriter, workbookChartLegendFormat: WorkbookChartLegendFormat | undefined = {} as WorkbookChartLegendFormat) : void {
        serializeEntity(writer, workbookChartLegendFormat)
        writer.writeObjectValue<WorkbookChartFill>("fill", workbookChartLegendFormat.fill, serializeWorkbookChartFill);
        writer.writeObjectValue<WorkbookChartFont>("font", workbookChartLegendFormat.font, serializeWorkbookChartFont);
}
