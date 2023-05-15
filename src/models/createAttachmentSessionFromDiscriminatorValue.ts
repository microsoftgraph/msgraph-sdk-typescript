import {deserializeIntoAttachmentSession} from './deserializeIntoAttachmentSession';
import {AttachmentSession} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttachmentSessionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAttachmentSession;
}
