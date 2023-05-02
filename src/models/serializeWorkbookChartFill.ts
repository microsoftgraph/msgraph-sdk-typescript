import {serializeEntity} from './serializeEntity';
import {WorkbookChartFill} from './workbookChartFill';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartFill(writer: SerializationWriter, workbookChartFill: WorkbookChartFill | undefined = {} as WorkbookChartFill) : void {
        serializeEntity(writer, workbookChartFill)
}
