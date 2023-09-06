import { deserializeIntoAttachmentInfo } from './deserializeIntoAttachmentInfo';
import { type AttachmentInfo } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAttachmentInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAttachmentInfo;
}
