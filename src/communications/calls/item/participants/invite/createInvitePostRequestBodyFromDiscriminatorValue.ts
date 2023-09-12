import { deserializeIntoInvitePostRequestBody } from './deserializeIntoInvitePostRequestBody';
import { type InvitePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createInvitePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoInvitePostRequestBody;
}
