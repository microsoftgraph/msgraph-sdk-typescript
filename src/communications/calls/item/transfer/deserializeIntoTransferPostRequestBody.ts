import {createInvitationParticipantInfoFromDiscriminatorValue} from '../../../../models/createInvitationParticipantInfoFromDiscriminatorValue';
import {createParticipantInfoFromDiscriminatorValue} from '../../../../models/createParticipantInfoFromDiscriminatorValue';
import {InvitationParticipantInfo} from '../../../../models/invitationParticipantInfo';
import {ParticipantInfo} from '../../../../models/participantInfo';
import {serializeInvitationParticipantInfo} from '../../../../models/serializeInvitationParticipantInfo';
import {serializeParticipantInfo} from '../../../../models/serializeParticipantInfo';
import {TransferPostRequestBody} from './transferPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTransferPostRequestBody(transferPostRequestBody: TransferPostRequestBody | undefined = {} as TransferPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "transferee": n => { transferPostRequestBody.transferee = n.getObjectValue<ParticipantInfo>(createParticipantInfoFromDiscriminatorValue); },
        "transferTarget": n => { transferPostRequestBody.transferTarget = n.getObjectValue<InvitationParticipantInfo>(createInvitationParticipantInfoFromDiscriminatorValue); },
    }
}
