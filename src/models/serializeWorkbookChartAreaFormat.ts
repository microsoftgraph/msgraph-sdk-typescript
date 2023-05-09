import {serializeEntity} from './serializeEntity';
import {serializeWorkbookChartFill} from './serializeWorkbookChartFill';
import {serializeWorkbookChartFont} from './serializeWorkbookChartFont';
import {WorkbookChartAreaFormat} from './workbookChartAreaFormat';
import {WorkbookChartFill} from './workbookChartFill';
import {WorkbookChartFont} from './workbookChartFont';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartAreaFormat(writer: SerializationWriter, workbookChartAreaFormat: WorkbookChartAreaFormat | undefined = {} as WorkbookChartAreaFormat) : void {
        serializeEntity(writer, workbookChartAreaFormat)
        writer.writeObjectValue<WorkbookChartFill>("fill", workbookChartAreaFormat.fill, serializeWorkbookChartFill);
        writer.writeObjectValue<WorkbookChartFont>("font", workbookChartAreaFormat.font, serializeWorkbookChartFont);
}
