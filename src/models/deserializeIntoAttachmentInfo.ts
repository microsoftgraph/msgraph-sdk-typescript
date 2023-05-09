import {AttachmentInfo} from './attachmentInfo';
import {AttachmentType} from './attachmentType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttachmentInfo(attachmentInfo: AttachmentInfo | undefined = {} as AttachmentInfo) : Record<string, (node: ParseNode) => void> {
    return {
        "attachmentType": n => { attachmentInfo.attachmentType = n.getEnumValue<AttachmentType>(AttachmentType); },
        "contentType": n => { attachmentInfo.contentType = n.getStringValue(); },
        "name": n => { attachmentInfo.name = n.getStringValue(); },
        "@odata.type": n => { attachmentInfo.odataType = n.getStringValue(); },
        "size": n => { attachmentInfo.size = n.getNumberValue(); },
    }
}
