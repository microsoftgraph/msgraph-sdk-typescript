import {InvitationCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInvitationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : InvitationCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InvitationCollectionResponseImpl();
}
