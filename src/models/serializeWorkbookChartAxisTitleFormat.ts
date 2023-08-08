import {serializeEntity} from './serializeEntity';
import {serializeWorkbookChartFont} from './serializeWorkbookChartFont';
import type {WorkbookChartAxisTitleFormat} from './workbookChartAxisTitleFormat';
import type {WorkbookChartFont} from './workbookChartFont';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartAxisTitleFormat(writer: SerializationWriter, workbookChartAxisTitleFormat: WorkbookChartAxisTitleFormat | undefined = {} as WorkbookChartAxisTitleFormat) : void {
        serializeEntity(writer, workbookChartAxisTitleFormat)
        writer.writeObjectValue<WorkbookChartFont>("font", workbookChartAxisTitleFormat.font, serializeWorkbookChartFont);
}
