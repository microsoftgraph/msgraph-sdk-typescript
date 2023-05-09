import {AdministrativeUnit} from './administrativeUnit';
import {DirectoryObject} from './directoryObject';
import {Extension} from './extension';
import {ScopedRoleMembership} from './scopedRoleMembership';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeExtension} from './serializeExtension';
import {serializeScopedRoleMembership} from './serializeScopedRoleMembership';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAdministrativeUnit(writer: SerializationWriter, administrativeUnit: AdministrativeUnit | undefined = {} as AdministrativeUnit) : void {
        serializeDirectoryObject(writer, administrativeUnit)
        writer.writeStringValue("description", administrativeUnit.description);
        writer.writeStringValue("displayName", administrativeUnit.displayName);
        writer.writeCollectionOfObjectValues<Extension>("extensions", administrativeUnit.extensions, serializeExtension);
        writer.writeCollectionOfObjectValues<DirectoryObject>("members", administrativeUnit.members, serializeDirectoryObject);
        writer.writeCollectionOfObjectValues<ScopedRoleMembership>("scopedRoleMembers", administrativeUnit.scopedRoleMembers, serializeScopedRoleMembership);
        writer.writeStringValue("visibility", administrativeUnit.visibility);
}
