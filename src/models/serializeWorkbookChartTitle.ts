import {serializeEntity} from './serializeEntity';
import {serializeWorkbookChartTitleFormat} from './serializeWorkbookChartTitleFormat';
import {WorkbookChartTitle} from './workbookChartTitle';
import {WorkbookChartTitleFormat} from './workbookChartTitleFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartTitle(writer: SerializationWriter, workbookChartTitle: WorkbookChartTitle | undefined = {} as WorkbookChartTitle) : void {
        serializeEntity(writer, workbookChartTitle)
        writer.writeObjectValue<WorkbookChartTitleFormat>("format", workbookChartTitle.format, serializeWorkbookChartTitleFormat);
        writer.writeBooleanValue("overlay", workbookChartTitle.overlay);
        writer.writeStringValue("text", workbookChartTitle.text);
        writer.writeBooleanValue("visible", workbookChartTitle.visible);
}
