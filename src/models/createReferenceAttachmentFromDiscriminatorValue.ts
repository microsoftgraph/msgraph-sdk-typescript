import {ReferenceAttachmentImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createReferenceAttachmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : ReferenceAttachmentImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ReferenceAttachmentImpl();
}
