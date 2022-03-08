import {SharingInvitation} from './sharingInvitation';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharingInvitationFromDiscriminatorValue(parseNode: ParseNode | undefined) : SharingInvitation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SharingInvitation();
}
