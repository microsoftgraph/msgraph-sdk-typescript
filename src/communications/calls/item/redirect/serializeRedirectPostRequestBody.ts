import { type InvitationParticipantInfo } from '../../../../models/invitationParticipantInfo';
import { serializeInvitationParticipantInfo } from '../../../../models/serializeInvitationParticipantInfo';
import { type RedirectPostRequestBody } from './redirectPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeRedirectPostRequestBody(writer: SerializationWriter, redirectPostRequestBody: RedirectPostRequestBody | undefined = {} as RedirectPostRequestBody) : void {
        writer.writeStringValue("callbackUri", redirectPostRequestBody.callbackUri);
        writer.writeCollectionOfObjectValues<InvitationParticipantInfo>("targets", redirectPostRequestBody.targets, serializeInvitationParticipantInfo);
        writer.writeNumberValue("timeout", redirectPostRequestBody.timeout);
        writer.writeAdditionalData(redirectPostRequestBody.additionalData);
}
