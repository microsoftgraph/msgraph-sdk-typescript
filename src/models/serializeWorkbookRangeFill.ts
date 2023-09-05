import { serializeEntity } from './serializeEntity';
import { type WorkbookRangeFill } from './workbookRangeFill';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWorkbookRangeFill(writer: SerializationWriter, workbookRangeFill: WorkbookRangeFill | undefined = {} as WorkbookRangeFill) : void {
        serializeEntity(writer, workbookRangeFill)
        writer.writeStringValue("color", workbookRangeFill.color);
}
