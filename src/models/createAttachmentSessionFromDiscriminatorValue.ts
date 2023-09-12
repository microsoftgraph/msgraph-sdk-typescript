import { deserializeIntoAttachmentSession } from './deserializeIntoAttachmentSession';
import { type AttachmentSession } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAttachmentSessionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAttachmentSession;
}
