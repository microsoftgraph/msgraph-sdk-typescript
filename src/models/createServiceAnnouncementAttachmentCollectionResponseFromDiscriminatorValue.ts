import {deserializeIntoServiceAnnouncementAttachmentCollectionResponse} from './deserializeIntoServiceAnnouncementAttachmentCollectionResponse';
import {ServiceAnnouncementAttachmentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceAnnouncementAttachmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoServiceAnnouncementAttachmentCollectionResponse;
}
