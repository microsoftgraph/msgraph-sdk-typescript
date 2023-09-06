import { createDirectoryObjectFromDiscriminatorValue } from './createDirectoryObjectFromDiscriminatorValue';
import { createScopedRoleMembershipFromDiscriminatorValue } from './createScopedRoleMembershipFromDiscriminatorValue';
import { deserializeIntoDirectoryObject } from './deserializeIntoDirectoryObject';
import { type DirectoryObject } from './directoryObject';
import { type DirectoryRole } from './directoryRole';
import { type ScopedRoleMembership } from './scopedRoleMembership';
import { serializeDirectoryObject } from './serializeDirectoryObject';
import { serializeScopedRoleMembership } from './serializeScopedRoleMembership';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

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
