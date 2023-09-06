import { serializeEntity } from './serializeEntity';
import { type WorkbookRangeFont } from './workbookRangeFont';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWorkbookRangeFont(writer: SerializationWriter, workbookRangeFont: WorkbookRangeFont | undefined = {} as WorkbookRangeFont) : void {
        serializeEntity(writer, workbookRangeFont)
        writer.writeBooleanValue("bold", workbookRangeFont.bold);
        writer.writeStringValue("color", workbookRangeFont.color);
        writer.writeBooleanValue("italic", workbookRangeFont.italic);
        writer.writeStringValue("name", workbookRangeFont.name);
        writer.writeNumberValue("size", workbookRangeFont.size);
        writer.writeStringValue("underline", workbookRangeFont.underline);
}
