import {ServiceAnnouncementBaseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceAnnouncementBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ServiceAnnouncementBaseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ServiceAnnouncementBaseImpl();
}
