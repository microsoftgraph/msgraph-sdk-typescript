import {deserializeIntoServiceAnnouncementAttachment} from './deserializeIntoServiceAnnouncementAttachment';
import {ServiceAnnouncementAttachment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceAnnouncementAttachmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoServiceAnnouncementAttachment;
}
