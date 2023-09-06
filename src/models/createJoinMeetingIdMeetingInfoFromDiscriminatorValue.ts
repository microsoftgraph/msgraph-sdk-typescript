import { deserializeIntoJoinMeetingIdMeetingInfo } from './deserializeIntoJoinMeetingIdMeetingInfo';
import { type JoinMeetingIdMeetingInfo } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createJoinMeetingIdMeetingInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoJoinMeetingIdMeetingInfo;
}
