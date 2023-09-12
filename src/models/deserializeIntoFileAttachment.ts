import { deserializeIntoAttachment } from './deserializeIntoAttachment';
import { type FileAttachment } from './fileAttachment';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoFileAttachment(fileAttachment: FileAttachment | undefined = {} as FileAttachment) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAttachment(fileAttachment),
        "contentBytes": n => { fileAttachment.contentBytes = n.getStringValue(); },
        "contentId": n => { fileAttachment.contentId = n.getStringValue(); },
        "contentLocation": n => { fileAttachment.contentLocation = n.getStringValue(); },
    }
}
