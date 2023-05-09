import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {InvitationParticipantInfo} from './invitationParticipantInfo';
import {serializeIdentitySet} from './serializeIdentitySet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInvitationParticipantInfo(invitationParticipantInfo: InvitationParticipantInfo | undefined = {} as InvitationParticipantInfo) : Record<string, (node: ParseNode) => void> {
    return {
        "hidden": n => { invitationParticipantInfo.hidden = n.getBooleanValue(); },
        "identity": n => { invitationParticipantInfo.identity = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "@odata.type": n => { invitationParticipantInfo.odataType = n.getStringValue(); },
        "participantId": n => { invitationParticipantInfo.participantId = n.getStringValue(); },
        "removeFromDefaultAudioRoutingGroup": n => { invitationParticipantInfo.removeFromDefaultAudioRoutingGroup = n.getBooleanValue(); },
        "replacesCallId": n => { invitationParticipantInfo.replacesCallId = n.getStringValue(); },
    }
}
