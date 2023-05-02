import {AdministrativeUnit} from './administrativeUnit';
import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createExtensionFromDiscriminatorValue} from './createExtensionFromDiscriminatorValue';
import {createScopedRoleMembershipFromDiscriminatorValue} from './createScopedRoleMembershipFromDiscriminatorValue';
import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {DirectoryObject} from './directoryObject';
import {Extension} from './extension';
import {ScopedRoleMembership} from './scopedRoleMembership';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeExtension} from './serializeExtension';
import {serializeScopedRoleMembership} from './serializeScopedRoleMembership';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAdministrativeUnit(administrativeUnit: AdministrativeUnit | undefined = {} as AdministrativeUnit) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDirectoryObject(administrativeUnit),
        "description": n => { administrativeUnit.description = n.getStringValue(); },
        "displayName": n => { administrativeUnit.displayName = n.getStringValue(); },
        "extensions": n => { administrativeUnit.extensions = n.getCollectionOfObjectValues<Extension>(createExtensionFromDiscriminatorValue); },
        "members": n => { administrativeUnit.members = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "scopedRoleMembers": n => { administrativeUnit.scopedRoleMembers = n.getCollectionOfObjectValues<ScopedRoleMembership>(createScopedRoleMembershipFromDiscriminatorValue); },
        "visibility": n => { administrativeUnit.visibility = n.getStringValue(); },
    }
}
