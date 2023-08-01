import {serializeEntity} from './serializeEntity';
import {serializeWorkbookChartFill} from './serializeWorkbookChartFill';
import {serializeWorkbookChartFont} from './serializeWorkbookChartFont';
import type {WorkbookChartFill} from './workbookChartFill';
import type {WorkbookChartFont} from './workbookChartFont';
import type {WorkbookChartTitleFormat} from './workbookChartTitleFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartTitleFormat(writer: SerializationWriter, workbookChartTitleFormat: WorkbookChartTitleFormat | undefined = {} as WorkbookChartTitleFormat) : void {
        serializeEntity(writer, workbookChartTitleFormat)
        writer.writeObjectValue<WorkbookChartFill>("fill", workbookChartTitleFormat.fill, serializeWorkbookChartFill);
        writer.writeObjectValue<WorkbookChartFont>("font", workbookChartTitleFormat.font, serializeWorkbookChartFont);
}
