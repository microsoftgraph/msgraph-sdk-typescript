import {InviteParticipantsOperationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInviteParticipantsOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : InviteParticipantsOperationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InviteParticipantsOperationCollectionResponse();
}
