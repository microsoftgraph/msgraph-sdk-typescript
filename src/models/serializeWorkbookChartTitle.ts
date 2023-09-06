import { serializeEntity } from './serializeEntity';
import { serializeWorkbookChartTitleFormat } from './serializeWorkbookChartTitleFormat';
import { type WorkbookChartTitle } from './workbookChartTitle';
import { type WorkbookChartTitleFormat } from './workbookChartTitleFormat';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartTitle(writer: SerializationWriter, workbookChartTitle: WorkbookChartTitle | undefined = {} as WorkbookChartTitle) : void {
        serializeEntity(writer, workbookChartTitle)
        writer.writeObjectValue<WorkbookChartTitleFormat>("format", workbookChartTitle.format, serializeWorkbookChartTitleFormat);
        writer.writeBooleanValue("overlay", workbookChartTitle.overlay);
        writer.writeStringValue("text", workbookChartTitle.text);
        writer.writeBooleanValue("visible", workbookChartTitle.visible);
}
