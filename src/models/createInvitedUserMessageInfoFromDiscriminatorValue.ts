import { deserializeIntoInvitedUserMessageInfo } from './deserializeIntoInvitedUserMessageInfo';
import { type InvitedUserMessageInfo } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createInvitedUserMessageInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoInvitedUserMessageInfo;
}
