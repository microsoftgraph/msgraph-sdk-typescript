import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createItemReferenceFromDiscriminatorValue} from './createItemReferenceFromDiscriminatorValue';
import {createSharePointIdentitySetFromDiscriminatorValue} from './createSharePointIdentitySetFromDiscriminatorValue';
import {createSharingInvitationFromDiscriminatorValue} from './createSharingInvitationFromDiscriminatorValue';
import {createSharingLinkFromDiscriminatorValue} from './createSharingLinkFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {IdentitySet} from './identitySet';
import {ItemReference} from './itemReference';
import {Permission} from './permission';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeItemReference} from './serializeItemReference';
import {serializeSharePointIdentitySet} from './serializeSharePointIdentitySet';
import {serializeSharingInvitation} from './serializeSharingInvitation';
import {serializeSharingLink} from './serializeSharingLink';
import {SharePointIdentitySet} from './sharePointIdentitySet';
import {SharingInvitation} from './sharingInvitation';
import {SharingLink} from './sharingLink';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPermission(permission: Permission | undefined = {} as Permission) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(permission),
        "expirationDateTime": n => { permission.expirationDateTime = n.getDateValue(); },
        "grantedTo": n => { permission.grantedTo = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "grantedToIdentities": n => { permission.grantedToIdentities = n.getCollectionOfObjectValues<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "grantedToIdentitiesV2": n => { permission.grantedToIdentitiesV2 = n.getCollectionOfObjectValues<SharePointIdentitySet>(createSharePointIdentitySetFromDiscriminatorValue); },
        "grantedToV2": n => { permission.grantedToV2 = n.getObjectValue<SharePointIdentitySet>(createSharePointIdentitySetFromDiscriminatorValue); },
        "hasPassword": n => { permission.hasPassword = n.getBooleanValue(); },
        "inheritedFrom": n => { permission.inheritedFrom = n.getObjectValue<ItemReference>(createItemReferenceFromDiscriminatorValue); },
        "invitation": n => { permission.invitation = n.getObjectValue<SharingInvitation>(createSharingInvitationFromDiscriminatorValue); },
        "link": n => { permission.link = n.getObjectValue<SharingLink>(createSharingLinkFromDiscriminatorValue); },
        "roles": n => { permission.roles = n.getCollectionOfPrimitiveValues<string>(); },
        "shareId": n => { permission.shareId = n.getStringValue(); },
    }
}
