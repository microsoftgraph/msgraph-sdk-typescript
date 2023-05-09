import {serializeEntity} from './serializeEntity';
import {WorkbookRangeFill} from './workbookRangeFill';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookRangeFill(writer: SerializationWriter, workbookRangeFill: WorkbookRangeFill | undefined = {} as WorkbookRangeFill) : void {
        serializeEntity(writer, workbookRangeFill)
        writer.writeStringValue("color", workbookRangeFill.color);
}
