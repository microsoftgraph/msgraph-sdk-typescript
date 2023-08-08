import {serializeEntity} from './serializeEntity';
import {serializeWorkbookChartGridlinesFormat} from './serializeWorkbookChartGridlinesFormat';
import type {WorkbookChartGridlines} from './workbookChartGridlines';
import type {WorkbookChartGridlinesFormat} from './workbookChartGridlinesFormat';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartGridlines(writer: SerializationWriter, workbookChartGridlines: WorkbookChartGridlines | undefined = {} as WorkbookChartGridlines) : void {
        serializeEntity(writer, workbookChartGridlines)
        writer.writeObjectValue<WorkbookChartGridlinesFormat>("format", workbookChartGridlines.format, serializeWorkbookChartGridlinesFormat);
        writer.writeBooleanValue("visible", workbookChartGridlines.visible);
}
