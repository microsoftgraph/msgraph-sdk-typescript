import { serializeEntity } from './serializeEntity';
import { type WorkbookChartLineFormat } from './workbookChartLineFormat';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartLineFormat(writer: SerializationWriter, workbookChartLineFormat: WorkbookChartLineFormat | undefined = {} as WorkbookChartLineFormat) : void {
        serializeEntity(writer, workbookChartLineFormat)
        writer.writeStringValue("color", workbookChartLineFormat.color);
}
