import {ServiceAnnouncementAttachmentCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceAnnouncementAttachmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ServiceAnnouncementAttachmentCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ServiceAnnouncementAttachmentCollectionResponseImpl();
}
