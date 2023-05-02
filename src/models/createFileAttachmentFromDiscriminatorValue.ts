import {deserializeIntoFileAttachment} from './deserializeIntoFileAttachment';
import {FileAttachment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFileAttachmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFileAttachment;
}
