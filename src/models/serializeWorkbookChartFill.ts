import { serializeEntity } from './serializeEntity';
import { type WorkbookChartFill } from './workbookChartFill';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartFill(writer: SerializationWriter, workbookChartFill: WorkbookChartFill | undefined = {} as WorkbookChartFill) : void {
        serializeEntity(writer, workbookChartFill)
}
