import { deserializeIntoServiceAnnouncementAttachment } from './deserializeIntoServiceAnnouncementAttachment';
import { type ServiceAnnouncementAttachment } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createServiceAnnouncementAttachmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoServiceAnnouncementAttachment;
}
