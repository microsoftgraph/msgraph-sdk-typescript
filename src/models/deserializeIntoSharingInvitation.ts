import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {serializeIdentitySet} from './serializeIdentitySet';
import {SharingInvitation} from './sharingInvitation';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSharingInvitation(sharingInvitation: SharingInvitation | undefined = {} as SharingInvitation) : Record<string, (node: ParseNode) => void> {
    return {
        "email": n => { sharingInvitation.email = n.getStringValue(); },
        "invitedBy": n => { sharingInvitation.invitedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "@odata.type": n => { sharingInvitation.odataType = n.getStringValue(); },
        "redeemedBy": n => { sharingInvitation.redeemedBy = n.getStringValue(); },
        "signInRequired": n => { sharingInvitation.signInRequired = n.getBooleanValue(); },
    }
}
