import {AttachmentItemImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttachmentItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : AttachmentItemImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AttachmentItemImpl();
}
