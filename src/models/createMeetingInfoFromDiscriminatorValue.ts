import {MeetingInfoImpl, OrganizerMeetingInfoImpl, TokenMeetingInfoImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMeetingInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : MeetingInfoImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.organizerMeetingInfo":
                    return new OrganizerMeetingInfoImpl();
                case "#microsoft.graph.tokenMeetingInfo":
                    return new TokenMeetingInfoImpl();
            }
        }
    }
    return new MeetingInfoImpl();
}
