import {JoinMeetingIdMeetingInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createJoinMeetingIdMeetingInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : JoinMeetingIdMeetingInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new JoinMeetingIdMeetingInfo();
}
