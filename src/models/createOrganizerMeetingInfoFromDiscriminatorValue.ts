import {OrganizerMeetingInfoImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOrganizerMeetingInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : OrganizerMeetingInfoImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OrganizerMeetingInfoImpl();
}
