import { deserializeIntoInviteResponse } from './deserializeIntoInviteResponse';
import { type InviteResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createInviteResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoInviteResponse;
}
