import { type AttachmentBase } from './attachmentBase';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAttachmentBase(writer: SerializationWriter, attachmentBase: AttachmentBase | undefined = {} as AttachmentBase) : void {
        serializeEntity(writer, attachmentBase)
        writer.writeStringValue("contentType", attachmentBase.contentType);
        writer.writeDateValue("lastModifiedDateTime", attachmentBase.lastModifiedDateTime);
        writer.writeStringValue("name", attachmentBase.name);
        writer.writeNumberValue("size", attachmentBase.size);
}
