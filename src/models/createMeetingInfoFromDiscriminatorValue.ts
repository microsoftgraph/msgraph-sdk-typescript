import {JoinMeetingIdMeetingInfo, MeetingInfo, OrganizerMeetingInfo, TokenMeetingInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMeetingInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : MeetingInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.joinMeetingIdMeetingInfo":
                    return new JoinMeetingIdMeetingInfo();
                case "#microsoft.graph.organizerMeetingInfo":
                    return new OrganizerMeetingInfo();
                case "#microsoft.graph.tokenMeetingInfo":
                    return new TokenMeetingInfo();
            }
        }
    }
    return new MeetingInfo();
}
