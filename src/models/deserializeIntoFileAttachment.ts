import {deserializeIntoAttachment} from './deserializeIntoAttachment';
import {FileAttachment} from './fileAttachment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFileAttachment(fileAttachment: FileAttachment | undefined = {} as FileAttachment) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAttachment(fileAttachment),
        "contentBytes": n => { fileAttachment.contentBytes = n.getStringValue(); },
        "contentId": n => { fileAttachment.contentId = n.getStringValue(); },
        "contentLocation": n => { fileAttachment.contentLocation = n.getStringValue(); },
    }
}
