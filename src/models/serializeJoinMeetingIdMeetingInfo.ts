import {JoinMeetingIdMeetingInfo} from './joinMeetingIdMeetingInfo';
import {serializeMeetingInfo} from './serializeMeetingInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeJoinMeetingIdMeetingInfo(writer: SerializationWriter, joinMeetingIdMeetingInfo: JoinMeetingIdMeetingInfo | undefined = {} as JoinMeetingIdMeetingInfo) : void {
        serializeMeetingInfo(writer, joinMeetingIdMeetingInfo)
        writer.writeStringValue("joinMeetingId", joinMeetingIdMeetingInfo.joinMeetingId);
        writer.writeStringValue("passcode", joinMeetingIdMeetingInfo.passcode);
}
