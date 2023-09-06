import { deserializeIntoSharingInvitation } from './deserializeIntoSharingInvitation';
import { type SharingInvitation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSharingInvitationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSharingInvitation;
}
