import { type IdentitySet } from './identitySet';
import { type MeetingPolicyUpdatedEventMessageDetail } from './meetingPolicyUpdatedEventMessageDetail';
import { serializeEventMessageDetail } from './serializeEventMessageDetail';
import { serializeIdentitySet } from './serializeIdentitySet';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMeetingPolicyUpdatedEventMessageDetail(writer: SerializationWriter, meetingPolicyUpdatedEventMessageDetail: MeetingPolicyUpdatedEventMessageDetail | undefined = {} as MeetingPolicyUpdatedEventMessageDetail) : void {
        serializeEventMessageDetail(writer, meetingPolicyUpdatedEventMessageDetail)
        writer.writeObjectValue<IdentitySet>("initiator", meetingPolicyUpdatedEventMessageDetail.initiator, serializeIdentitySet);
        writer.writeBooleanValue("meetingChatEnabled", meetingPolicyUpdatedEventMessageDetail.meetingChatEnabled);
        writer.writeStringValue("meetingChatId", meetingPolicyUpdatedEventMessageDetail.meetingChatId);
}
