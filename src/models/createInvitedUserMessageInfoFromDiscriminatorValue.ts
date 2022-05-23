import {InvitedUserMessageInfoImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInvitedUserMessageInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : InvitedUserMessageInfoImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InvitedUserMessageInfoImpl();
}
