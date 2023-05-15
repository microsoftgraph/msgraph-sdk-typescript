import {IdentitySet} from './identitySet';
import {InvitationParticipantInfo} from './invitationParticipantInfo';
import {serializeIdentitySet} from './serializeIdentitySet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInvitationParticipantInfo(writer: SerializationWriter, invitationParticipantInfo: InvitationParticipantInfo | undefined = {} as InvitationParticipantInfo) : void {
        writer.writeBooleanValue("hidden", invitationParticipantInfo.hidden);
        writer.writeObjectValue<IdentitySet>("identity", invitationParticipantInfo.identity, serializeIdentitySet);
        writer.writeStringValue("@odata.type", invitationParticipantInfo.odataType);
        writer.writeStringValue("participantId", invitationParticipantInfo.participantId);
        writer.writeBooleanValue("removeFromDefaultAudioRoutingGroup", invitationParticipantInfo.removeFromDefaultAudioRoutingGroup);
        writer.writeStringValue("replacesCallId", invitationParticipantInfo.replacesCallId);
        writer.writeAdditionalData(invitationParticipantInfo.additionalData);
}
