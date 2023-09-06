import { type InvitationParticipantInfo } from '../../../../models/invitationParticipantInfo';
import { type ParticipantInfo } from '../../../../models/participantInfo';
import { serializeInvitationParticipantInfo } from '../../../../models/serializeInvitationParticipantInfo';
import { serializeParticipantInfo } from '../../../../models/serializeParticipantInfo';
import { type TransferPostRequestBody } from './transferPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTransferPostRequestBody(writer: SerializationWriter, transferPostRequestBody: TransferPostRequestBody | undefined = {} as TransferPostRequestBody) : void {
        writer.writeObjectValue<ParticipantInfo>("transferee", transferPostRequestBody.transferee, serializeParticipantInfo);
        writer.writeObjectValue<InvitationParticipantInfo>("transferTarget", transferPostRequestBody.transferTarget, serializeInvitationParticipantInfo);
        writer.writeAdditionalData(transferPostRequestBody.additionalData);
}
