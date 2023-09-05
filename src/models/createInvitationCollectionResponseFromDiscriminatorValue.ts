import { deserializeIntoInvitationCollectionResponse } from './deserializeIntoInvitationCollectionResponse';
import { type InvitationCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createInvitationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoInvitationCollectionResponse;
}
