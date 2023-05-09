import {deserializeIntoServiceAnnouncement} from './deserializeIntoServiceAnnouncement';
import {ServiceAnnouncement} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceAnnouncementFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoServiceAnnouncement;
}
