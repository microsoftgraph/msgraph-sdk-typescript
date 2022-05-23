import {ServiceAnnouncementAttachmentImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceAnnouncementAttachmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : ServiceAnnouncementAttachmentImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ServiceAnnouncementAttachmentImpl();
}
