import { serializeEntity } from './serializeEntity';
import { serializeWorkbookChartFont } from './serializeWorkbookChartFont';
import { serializeWorkbookChartLineFormat } from './serializeWorkbookChartLineFormat';
import { type WorkbookChartAxisFormat } from './workbookChartAxisFormat';
import { type WorkbookChartFont } from './workbookChartFont';
import { type WorkbookChartLineFormat } from './workbookChartLineFormat';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartAxisFormat(writer: SerializationWriter, workbookChartAxisFormat: WorkbookChartAxisFormat | undefined = {} as WorkbookChartAxisFormat) : void {
        serializeEntity(writer, workbookChartAxisFormat)
        writer.writeObjectValue<WorkbookChartFont>("font", workbookChartAxisFormat.font, serializeWorkbookChartFont);
        writer.writeObjectValue<WorkbookChartLineFormat>("line", workbookChartAxisFormat.line, serializeWorkbookChartLineFormat);
}
