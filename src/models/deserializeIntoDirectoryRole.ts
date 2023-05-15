import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createScopedRoleMembershipFromDiscriminatorValue} from './createScopedRoleMembershipFromDiscriminatorValue';
import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {DirectoryObject} from './directoryObject';
import {DirectoryRole} from './directoryRole';
import {ScopedRoleMembership} from './scopedRoleMembership';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeScopedRoleMembership} from './serializeScopedRoleMembership';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDirectoryRole(directoryRole: DirectoryRole | undefined = {} as DirectoryRole) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDirectoryObject(directoryRole),
        "description": n => { directoryRole.description = n.getStringValue(); },
        "displayName": n => { directoryRole.displayName = n.getStringValue(); },
        "members": n => { directoryRole.members = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "roleTemplateId": n => { directoryRole.roleTemplateId = n.getStringValue(); },
        "scopedMembers": n => { directoryRole.scopedMembers = n.getCollectionOfObjectValues<ScopedRoleMembership>(createScopedRoleMembershipFromDiscriminatorValue); },
    }
}
