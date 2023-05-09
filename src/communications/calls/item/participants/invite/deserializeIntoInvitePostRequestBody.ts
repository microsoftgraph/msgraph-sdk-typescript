import {createInvitationParticipantInfoFromDiscriminatorValue} from '../../../../../models/createInvitationParticipantInfoFromDiscriminatorValue';
import {InvitationParticipantInfo} from '../../../../../models/invitationParticipantInfo';
import {serializeInvitationParticipantInfo} from '../../../../../models/serializeInvitationParticipantInfo';
import {InvitePostRequestBody} from './invitePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInvitePostRequestBody(invitePostRequestBody: InvitePostRequestBody | undefined = {} as InvitePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "clientContext": n => { invitePostRequestBody.clientContext = n.getStringValue(); },
        "participants": n => { invitePostRequestBody.participants = n.getCollectionOfObjectValues<InvitationParticipantInfo>(createInvitationParticipantInfoFromDiscriminatorValue); },
    }
}
