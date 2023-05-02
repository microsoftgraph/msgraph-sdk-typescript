import {DirectoryObject} from './directoryObject';
import {DirectoryRole} from './directoryRole';
import {ScopedRoleMembership} from './scopedRoleMembership';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeScopedRoleMembership} from './serializeScopedRoleMembership';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDirectoryRole(writer: SerializationWriter, directoryRole: DirectoryRole | undefined = {} as DirectoryRole) : void {
        serializeDirectoryObject(writer, directoryRole)
        writer.writeStringValue("description", directoryRole.description);
        writer.writeStringValue("displayName", directoryRole.displayName);
        writer.writeCollectionOfObjectValues<DirectoryObject>("members", directoryRole.members, serializeDirectoryObject);
        writer.writeStringValue("roleTemplateId", directoryRole.roleTemplateId);
        writer.writeCollectionOfObjectValues<ScopedRoleMembership>("scopedMembers", directoryRole.scopedMembers, serializeScopedRoleMembership);
}
