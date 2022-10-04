import {InvitationParticipantInfoCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInvitationParticipantInfoCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : InvitationParticipantInfoCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InvitationParticipantInfoCollectionResponse();
}
