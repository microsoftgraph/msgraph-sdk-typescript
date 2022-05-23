import {InviteResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInviteResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : InviteResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InviteResponseImpl();
}
