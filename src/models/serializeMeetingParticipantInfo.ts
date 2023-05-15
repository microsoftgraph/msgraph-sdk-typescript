import {IdentitySet} from './identitySet';
import {MeetingParticipantInfo} from './meetingParticipantInfo';
import {OnlineMeetingRole} from './onlineMeetingRole';
import {serializeIdentitySet} from './serializeIdentitySet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMeetingParticipantInfo(writer: SerializationWriter, meetingParticipantInfo: MeetingParticipantInfo | undefined = {} as MeetingParticipantInfo) : void {
        writer.writeObjectValue<IdentitySet>("identity", meetingParticipantInfo.identity, serializeIdentitySet);
        writer.writeStringValue("@odata.type", meetingParticipantInfo.odataType);
        writer.writeEnumValue<OnlineMeetingRole>("role", meetingParticipantInfo.role);
        writer.writeStringValue("upn", meetingParticipantInfo.upn);
        writer.writeAdditionalData(meetingParticipantInfo.additionalData);
}
