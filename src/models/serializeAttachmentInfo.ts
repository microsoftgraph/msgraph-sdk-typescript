import { type AttachmentInfo } from './attachmentInfo';
import { AttachmentType } from './attachmentType';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAttachmentInfo(writer: SerializationWriter, attachmentInfo: AttachmentInfo | undefined = {} as AttachmentInfo) : void {
        writer.writeEnumValue<AttachmentType>("attachmentType", attachmentInfo.attachmentType);
        writer.writeStringValue("contentType", attachmentInfo.contentType);
        writer.writeStringValue("name", attachmentInfo.name);
        writer.writeStringValue("@odata.type", attachmentInfo.odataType);
        writer.writeNumberValue("size", attachmentInfo.size);
        writer.writeAdditionalData(attachmentInfo.additionalData);
}
