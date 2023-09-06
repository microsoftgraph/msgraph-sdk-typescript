import { serializeEntity } from './serializeEntity';
import { serializeWorkbookChartAxisTitleFormat } from './serializeWorkbookChartAxisTitleFormat';
import { type WorkbookChartAxisTitle } from './workbookChartAxisTitle';
import { type WorkbookChartAxisTitleFormat } from './workbookChartAxisTitleFormat';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartAxisTitle(writer: SerializationWriter, workbookChartAxisTitle: WorkbookChartAxisTitle | undefined = {} as WorkbookChartAxisTitle) : void {
        serializeEntity(writer, workbookChartAxisTitle)
        writer.writeObjectValue<WorkbookChartAxisTitleFormat>("format", workbookChartAxisTitle.format, serializeWorkbookChartAxisTitleFormat);
        writer.writeStringValue("text", workbookChartAxisTitle.text);
        writer.writeBooleanValue("visible", workbookChartAxisTitle.visible);
}
