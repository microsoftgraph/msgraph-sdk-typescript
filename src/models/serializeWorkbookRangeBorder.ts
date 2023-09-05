import { serializeEntity } from './serializeEntity';
import { type WorkbookRangeBorder } from './workbookRangeBorder';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWorkbookRangeBorder(writer: SerializationWriter, workbookRangeBorder: WorkbookRangeBorder | undefined = {} as WorkbookRangeBorder) : void {
        serializeEntity(writer, workbookRangeBorder)
        writer.writeStringValue("color", workbookRangeBorder.color);
        writer.writeStringValue("sideIndex", workbookRangeBorder.sideIndex);
        writer.writeStringValue("style", workbookRangeBorder.style);
        writer.writeStringValue("weight", workbookRangeBorder.weight);
}
