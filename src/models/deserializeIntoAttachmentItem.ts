import type {AttachmentItem} from './attachmentItem';
import {AttachmentType} from './attachmentType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttachmentItem(attachmentItem: AttachmentItem | undefined = {} as AttachmentItem) : Record<string, (node: ParseNode) => void> {
    return {
        "attachmentType": n => { attachmentItem.attachmentType = n.getEnumValue<AttachmentType>(AttachmentType); },
        "contentId": n => { attachmentItem.contentId = n.getStringValue(); },
        "contentType": n => { attachmentItem.contentType = n.getStringValue(); },
        "isInline": n => { attachmentItem.isInline = n.getBooleanValue(); },
        "name": n => { attachmentItem.name = n.getStringValue(); },
        "@odata.type": n => { attachmentItem.odataType = n.getStringValue(); },
        "size": n => { attachmentItem.size = n.getNumberValue(); },
    }
}
