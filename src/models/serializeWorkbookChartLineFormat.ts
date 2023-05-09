import {serializeEntity} from './serializeEntity';
import {WorkbookChartLineFormat} from './workbookChartLineFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartLineFormat(writer: SerializationWriter, workbookChartLineFormat: WorkbookChartLineFormat | undefined = {} as WorkbookChartLineFormat) : void {
        serializeEntity(writer, workbookChartLineFormat)
        writer.writeStringValue("color", workbookChartLineFormat.color);
}
