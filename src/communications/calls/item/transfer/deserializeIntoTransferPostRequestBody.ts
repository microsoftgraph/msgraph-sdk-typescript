import { createInvitationParticipantInfoFromDiscriminatorValue } from '../../../../models/createInvitationParticipantInfoFromDiscriminatorValue';
import { createParticipantInfoFromDiscriminatorValue } from '../../../../models/createParticipantInfoFromDiscriminatorValue';
import { type InvitationParticipantInfo } from '../../../../models/invitationParticipantInfo';
import { type ParticipantInfo } from '../../../../models/participantInfo';
import { serializeInvitationParticipantInfo } from '../../../../models/serializeInvitationParticipantInfo';
import { serializeParticipantInfo } from '../../../../models/serializeParticipantInfo';
import { type TransferPostRequestBody } from './transferPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTransferPostRequestBody(transferPostRequestBody: TransferPostRequestBody | undefined = {} as TransferPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "transferee": n => { transferPostRequestBody.transferee = n.getObjectValue<ParticipantInfo>(createParticipantInfoFromDiscriminatorValue); },
        "transferTarget": n => { transferPostRequestBody.transferTarget = n.getObjectValue<InvitationParticipantInfo>(createInvitationParticipantInfoFromDiscriminatorValue); },
    }
}
