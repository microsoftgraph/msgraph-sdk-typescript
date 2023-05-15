import {InvitationParticipantInfo} from '../../../../../models/invitationParticipantInfo';
import {serializeInvitationParticipantInfo} from '../../../../../models/serializeInvitationParticipantInfo';
import {InvitePostRequestBody} from './invitePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInvitePostRequestBody(writer: SerializationWriter, invitePostRequestBody: InvitePostRequestBody | undefined = {} as InvitePostRequestBody) : void {
        writer.writeStringValue("clientContext", invitePostRequestBody.clientContext);
        writer.writeCollectionOfObjectValues<InvitationParticipantInfo>("participants", invitePostRequestBody.participants, serializeInvitationParticipantInfo);
        writer.writeAdditionalData(invitePostRequestBody.additionalData);
}
