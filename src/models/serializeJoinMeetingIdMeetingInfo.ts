import {JoinMeetingIdMeetingInfo} from './joinMeetingIdMeetingInfo';
import {serializeMeetingInfo} from './serializeMeetingInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeJoinMeetingIdMeetingInfo(joinMeetingIdMeetingInfo: JoinMeetingIdMeetingInfo | undefined = {} as JoinMeetingIdMeetingInfo, writer: SerializationWriter) : void {
        serializeMeetingInfo(writer, joinMeetingIdMeetingInfo)
        writer.writeStringValue("joinMeetingId", joinMeetingIdMeetingInfo.joinMeetingId);
        writer.writeStringValue("passcode", joinMeetingIdMeetingInfo.passcode);
}
