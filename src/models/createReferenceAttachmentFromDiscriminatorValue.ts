import {deserializeIntoReferenceAttachment} from './deserializeIntoReferenceAttachment';
import {ReferenceAttachment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createReferenceAttachmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoReferenceAttachment;
}
