import { deserializeIntoOrganizerMeetingInfo } from './deserializeIntoOrganizerMeetingInfo';
import { type OrganizerMeetingInfo } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOrganizerMeetingInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOrganizerMeetingInfo;
}
