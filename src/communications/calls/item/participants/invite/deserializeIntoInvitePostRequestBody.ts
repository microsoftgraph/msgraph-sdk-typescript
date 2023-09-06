import { createInvitationParticipantInfoFromDiscriminatorValue } from '../../../../../models/createInvitationParticipantInfoFromDiscriminatorValue';
import { type InvitationParticipantInfo } from '../../../../../models/invitationParticipantInfo';
import { serializeInvitationParticipantInfo } from '../../../../../models/serializeInvitationParticipantInfo';
import { type InvitePostRequestBody } from './invitePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoInvitePostRequestBody(invitePostRequestBody: InvitePostRequestBody | undefined = {} as InvitePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "clientContext": n => { invitePostRequestBody.clientContext = n.getStringValue(); },
        "participants": n => { invitePostRequestBody.participants = n.getCollectionOfObjectValues<InvitationParticipantInfo>(createInvitationParticipantInfoFromDiscriminatorValue); },
    }
}
