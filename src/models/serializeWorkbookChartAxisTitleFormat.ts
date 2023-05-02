import {serializeEntity} from './serializeEntity';
import {serializeWorkbookChartFont} from './serializeWorkbookChartFont';
import {WorkbookChartAxisTitleFormat} from './workbookChartAxisTitleFormat';
import {WorkbookChartFont} from './workbookChartFont';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartAxisTitleFormat(writer: SerializationWriter, workbookChartAxisTitleFormat: WorkbookChartAxisTitleFormat | undefined = {} as WorkbookChartAxisTitleFormat) : void {
        serializeEntity(writer, workbookChartAxisTitleFormat)
        writer.writeObjectValue<WorkbookChartFont>("font", workbookChartAxisTitleFormat.font, serializeWorkbookChartFont);
}
