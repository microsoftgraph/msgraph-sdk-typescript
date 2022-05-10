import {InviteRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInviteRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : InviteRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InviteRequestBodyImpl();
}
