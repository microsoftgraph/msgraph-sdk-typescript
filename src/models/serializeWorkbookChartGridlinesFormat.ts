import {serializeEntity} from './serializeEntity';
import {serializeWorkbookChartLineFormat} from './serializeWorkbookChartLineFormat';
import {WorkbookChartGridlinesFormat} from './workbookChartGridlinesFormat';
import {WorkbookChartLineFormat} from './workbookChartLineFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartGridlinesFormat(writer: SerializationWriter, workbookChartGridlinesFormat: WorkbookChartGridlinesFormat | undefined = {} as WorkbookChartGridlinesFormat) : void {
        serializeEntity(writer, workbookChartGridlinesFormat)
        writer.writeObjectValue<WorkbookChartLineFormat>("line", workbookChartGridlinesFormat.line, serializeWorkbookChartLineFormat);
}
