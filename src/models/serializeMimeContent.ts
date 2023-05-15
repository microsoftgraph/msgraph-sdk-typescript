import {MimeContent} from './mimeContent';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMimeContent(writer: SerializationWriter, mimeContent: MimeContent | undefined = {} as MimeContent) : void {
        writer.writeStringValue("@odata.type", mimeContent.odataType);
        writer.writeStringValue("type", mimeContent.type);
        writer.writeStringValue("value", mimeContent.value);
        writer.writeAdditionalData(mimeContent.additionalData);
}
