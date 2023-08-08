import {deserializeIntoMeetingInfo} from './deserializeIntoMeetingInfo';
import type {JoinMeetingIdMeetingInfo} from './joinMeetingIdMeetingInfo';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoJoinMeetingIdMeetingInfo(joinMeetingIdMeetingInfo: JoinMeetingIdMeetingInfo | undefined = {} as JoinMeetingIdMeetingInfo) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMeetingInfo(joinMeetingIdMeetingInfo),
        "joinMeetingId": n => { joinMeetingIdMeetingInfo.joinMeetingId = n.getStringValue(); },
        "passcode": n => { joinMeetingIdMeetingInfo.passcode = n.getStringValue(); },
    }
}
