import {OrganizerMeetingInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOrganizerMeetingInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : OrganizerMeetingInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OrganizerMeetingInfo();
}
