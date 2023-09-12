import { deserializeIntoInvitation } from './deserializeIntoInvitation';
import { type Invitation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createInvitationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoInvitation;
}
