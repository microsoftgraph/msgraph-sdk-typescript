import {AttachmentSession} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttachmentSessionFromDiscriminatorValue(parseNode: ParseNode | undefined) : AttachmentSession {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AttachmentSession();
}
