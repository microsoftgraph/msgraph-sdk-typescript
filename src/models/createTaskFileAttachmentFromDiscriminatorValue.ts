import {deserializeIntoTaskFileAttachment} from './deserializeIntoTaskFileAttachment';
import {TaskFileAttachment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTaskFileAttachmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTaskFileAttachment;
}
