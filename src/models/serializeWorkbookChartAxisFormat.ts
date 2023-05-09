import {serializeEntity} from './serializeEntity';
import {serializeWorkbookChartFont} from './serializeWorkbookChartFont';
import {serializeWorkbookChartLineFormat} from './serializeWorkbookChartLineFormat';
import {WorkbookChartAxisFormat} from './workbookChartAxisFormat';
import {WorkbookChartFont} from './workbookChartFont';
import {WorkbookChartLineFormat} from './workbookChartLineFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartAxisFormat(writer: SerializationWriter, workbookChartAxisFormat: WorkbookChartAxisFormat | undefined = {} as WorkbookChartAxisFormat) : void {
        serializeEntity(writer, workbookChartAxisFormat)
        writer.writeObjectValue<WorkbookChartFont>("font", workbookChartAxisFormat.font, serializeWorkbookChartFont);
        writer.writeObjectValue<WorkbookChartLineFormat>("line", workbookChartAxisFormat.line, serializeWorkbookChartLineFormat);
}
