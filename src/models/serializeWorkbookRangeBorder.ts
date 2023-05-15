import {serializeEntity} from './serializeEntity';
import {WorkbookRangeBorder} from './workbookRangeBorder';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookRangeBorder(writer: SerializationWriter, workbookRangeBorder: WorkbookRangeBorder | undefined = {} as WorkbookRangeBorder) : void {
        serializeEntity(writer, workbookRangeBorder)
        writer.writeStringValue("color", workbookRangeBorder.color);
        writer.writeStringValue("sideIndex", workbookRangeBorder.sideIndex);
        writer.writeStringValue("style", workbookRangeBorder.style);
        writer.writeStringValue("weight", workbookRangeBorder.weight);
}
