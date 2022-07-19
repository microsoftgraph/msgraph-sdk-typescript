import {ReferenceAttachment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createReferenceAttachmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : ReferenceAttachment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ReferenceAttachment();
}
