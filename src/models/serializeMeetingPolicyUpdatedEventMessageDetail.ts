import {IdentitySet} from './identitySet';
import {MeetingPolicyUpdatedEventMessageDetail} from './meetingPolicyUpdatedEventMessageDetail';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMeetingPolicyUpdatedEventMessageDetail(writer: SerializationWriter, meetingPolicyUpdatedEventMessageDetail: MeetingPolicyUpdatedEventMessageDetail | undefined = {} as MeetingPolicyUpdatedEventMessageDetail) : void {
        serializeEventMessageDetail(writer, meetingPolicyUpdatedEventMessageDetail)
        writer.writeObjectValue<IdentitySet>("initiator", meetingPolicyUpdatedEventMessageDetail.initiator, serializeIdentitySet);
        writer.writeBooleanValue("meetingChatEnabled", meetingPolicyUpdatedEventMessageDetail.meetingChatEnabled);
        writer.writeStringValue("meetingChatId", meetingPolicyUpdatedEventMessageDetail.meetingChatId);
}
