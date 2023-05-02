import {deserializeIntoSharingInvitation} from './deserializeIntoSharingInvitation';
import {SharingInvitation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharingInvitationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSharingInvitation;
}
