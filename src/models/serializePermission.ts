import {IdentitySet} from './identitySet';
import {ItemReference} from './itemReference';
import {Permission} from './permission';
import {serializeEntity} from './serializeEntity';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeItemReference} from './serializeItemReference';
import {serializeSharePointIdentitySet} from './serializeSharePointIdentitySet';
import {serializeSharingInvitation} from './serializeSharingInvitation';
import {serializeSharingLink} from './serializeSharingLink';
import {SharePointIdentitySet} from './sharePointIdentitySet';
import {SharingInvitation} from './sharingInvitation';
import {SharingLink} from './sharingLink';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePermission(writer: SerializationWriter, permission: Permission | undefined = {} as Permission) : void {
        serializeEntity(writer, permission)
        writer.writeDateValue("expirationDateTime", permission.expirationDateTime);
        writer.writeObjectValue<IdentitySet>("grantedTo", permission.grantedTo, serializeIdentitySet);
        writer.writeCollectionOfObjectValues<IdentitySet>("grantedToIdentities", permission.grantedToIdentities, serializeIdentitySet);
        writer.writeCollectionOfObjectValues<SharePointIdentitySet>("grantedToIdentitiesV2", permission.grantedToIdentitiesV2, serializeSharePointIdentitySet);
        writer.writeObjectValue<SharePointIdentitySet>("grantedToV2", permission.grantedToV2, serializeSharePointIdentitySet);
        writer.writeBooleanValue("hasPassword", permission.hasPassword);
        writer.writeObjectValue<ItemReference>("inheritedFrom", permission.inheritedFrom, serializeItemReference);
        writer.writeObjectValue<SharingInvitation>("invitation", permission.invitation, serializeSharingInvitation);
        writer.writeObjectValue<SharingLink>("link", permission.link, serializeSharingLink);
        writer.writeCollectionOfPrimitiveValues<string>("roles", permission.roles);
        writer.writeStringValue("shareId", permission.shareId);
}
