import {AttachmentBase} from './attachmentBase';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttachmentBase(attachmentBase: AttachmentBase | undefined = {} as AttachmentBase) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(attachmentBase),
        "contentType": n => { attachmentBase.contentType = n.getStringValue(); },
        "lastModifiedDateTime": n => { attachmentBase.lastModifiedDateTime = n.getDateValue(); },
        "name": n => { attachmentBase.name = n.getStringValue(); },
        "size": n => { attachmentBase.size = n.getNumberValue(); },
    }
}
