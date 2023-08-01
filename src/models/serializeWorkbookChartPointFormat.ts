import {serializeEntity} from './serializeEntity';
import {serializeWorkbookChartFill} from './serializeWorkbookChartFill';
import type {WorkbookChartFill} from './workbookChartFill';
import type {WorkbookChartPointFormat} from './workbookChartPointFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartPointFormat(writer: SerializationWriter, workbookChartPointFormat: WorkbookChartPointFormat | undefined = {} as WorkbookChartPointFormat) : void {
        serializeEntity(writer, workbookChartPointFormat)
        writer.writeObjectValue<WorkbookChartFill>("fill", workbookChartPointFormat.fill, serializeWorkbookChartFill);
}
