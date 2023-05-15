import {TextColumn} from './textColumn';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTextColumn(writer: SerializationWriter, textColumn: TextColumn | undefined = {} as TextColumn) : void {
        writer.writeBooleanValue("allowMultipleLines", textColumn.allowMultipleLines);
        writer.writeBooleanValue("appendChangesToExistingText", textColumn.appendChangesToExistingText);
        writer.writeNumberValue("linesForEditing", textColumn.linesForEditing);
        writer.writeNumberValue("maxLength", textColumn.maxLength);
        writer.writeStringValue("@odata.type", textColumn.odataType);
        writer.writeStringValue("textType", textColumn.textType);
        writer.writeAdditionalData(textColumn.additionalData);
}
