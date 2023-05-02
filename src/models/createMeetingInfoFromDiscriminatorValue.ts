import {deserializeIntoJoinMeetingIdMeetingInfo} from './deserializeIntoJoinMeetingIdMeetingInfo';
import {deserializeIntoMeetingInfo} from './deserializeIntoMeetingInfo';
import {deserializeIntoOrganizerMeetingInfo} from './deserializeIntoOrganizerMeetingInfo';
import {deserializeIntoTokenMeetingInfo} from './deserializeIntoTokenMeetingInfo';
import {JoinMeetingIdMeetingInfo, MeetingInfo, OrganizerMeetingInfo, TokenMeetingInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMeetingInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.joinMeetingIdMeetingInfo":
                    return deserializeIntoJoinMeetingIdMeetingInfo;
                case "#microsoft.graph.organizerMeetingInfo":
                    return deserializeIntoOrganizerMeetingInfo;
                case "#microsoft.graph.tokenMeetingInfo":
                    return deserializeIntoTokenMeetingInfo;
            }
        }
    }
    return deserializeIntoMeetingInfo;
}
