import type {AttachmentItem} from './attachmentItem';
import {AttachmentType} from './attachmentType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttachmentItem(writer: SerializationWriter, attachmentItem: AttachmentItem | undefined = {} as AttachmentItem) : void {
        writer.writeEnumValue<AttachmentType>("attachmentType", attachmentItem.attachmentType);
        writer.writeStringValue("contentId", attachmentItem.contentId);
        writer.writeStringValue("contentType", attachmentItem.contentType);
        writer.writeBooleanValue("isInline", attachmentItem.isInline);
        writer.writeStringValue("name", attachmentItem.name);
        writer.writeStringValue("@odata.type", attachmentItem.odataType);
        writer.writeNumberValue("size", attachmentItem.size);
        writer.writeAdditionalData(attachmentItem.additionalData);
}
