import {ServiceAnnouncementAttachmentCollectionResponse} from './serviceAnnouncementAttachmentCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceAnnouncementAttachmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ServiceAnnouncementAttachmentCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ServiceAnnouncementAttachmentCollectionResponse();
}
