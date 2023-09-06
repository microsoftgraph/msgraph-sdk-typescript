import { serializeEntity } from './serializeEntity';
import { serializeWorkbookChartLineFormat } from './serializeWorkbookChartLineFormat';
import { type WorkbookChartGridlinesFormat } from './workbookChartGridlinesFormat';
import { type WorkbookChartLineFormat } from './workbookChartLineFormat';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartGridlinesFormat(writer: SerializationWriter, workbookChartGridlinesFormat: WorkbookChartGridlinesFormat | undefined = {} as WorkbookChartGridlinesFormat) : void {
        serializeEntity(writer, workbookChartGridlinesFormat)
        writer.writeObjectValue<WorkbookChartLineFormat>("line", workbookChartGridlinesFormat.line, serializeWorkbookChartLineFormat);
}
