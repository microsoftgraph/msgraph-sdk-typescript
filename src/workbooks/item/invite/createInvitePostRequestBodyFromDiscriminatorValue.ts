import {InvitePostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInvitePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : InvitePostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InvitePostRequestBodyImpl();
}
