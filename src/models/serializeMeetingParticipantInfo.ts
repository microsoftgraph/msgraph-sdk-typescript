import { type IdentitySet } from './identitySet';
import { type MeetingParticipantInfo } from './meetingParticipantInfo';
import { OnlineMeetingRole } from './onlineMeetingRole';
import { serializeIdentitySet } from './serializeIdentitySet';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMeetingParticipantInfo(writer: SerializationWriter, meetingParticipantInfo: MeetingParticipantInfo | undefined = {} as MeetingParticipantInfo) : void {
        writer.writeObjectValue<IdentitySet>("identity", meetingParticipantInfo.identity, serializeIdentitySet);
        writer.writeStringValue("@odata.type", meetingParticipantInfo.odataType);
        writer.writeEnumValue<OnlineMeetingRole>("role", meetingParticipantInfo.role);
        writer.writeStringValue("upn", meetingParticipantInfo.upn);
        writer.writeAdditionalData(meetingParticipantInfo.additionalData);
}
