import {serializeEntity} from './serializeEntity';
import {serializeWorkbookChartFill} from './serializeWorkbookChartFill';
import {serializeWorkbookChartFont} from './serializeWorkbookChartFont';
import type {WorkbookChartAreaFormat} from './workbookChartAreaFormat';
import type {WorkbookChartFill} from './workbookChartFill';
import type {WorkbookChartFont} from './workbookChartFont';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartAreaFormat(writer: SerializationWriter, workbookChartAreaFormat: WorkbookChartAreaFormat | undefined = {} as WorkbookChartAreaFormat) : void {
        serializeEntity(writer, workbookChartAreaFormat)
        writer.writeObjectValue<WorkbookChartFill>("fill", workbookChartAreaFormat.fill, serializeWorkbookChartFill);
        writer.writeObjectValue<WorkbookChartFont>("font", workbookChartAreaFormat.font, serializeWorkbookChartFont);
}
