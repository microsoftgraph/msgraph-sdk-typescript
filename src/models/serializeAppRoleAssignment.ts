import {AppRoleAssignment} from './appRoleAssignment';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function serializeAppRoleAssignment(writer: SerializationWriter, appRoleAssignment: AppRoleAssignment | undefined = {} as AppRoleAssignment) : void {
        serializeDirectoryObject(writer, appRoleAssignment)
        writer.writeGuidValue("appRoleId", appRoleAssignment.appRoleId);
        writer.writeDateValue("createdDateTime", appRoleAssignment.createdDateTime);
        writer.writeStringValue("principalDisplayName", appRoleAssignment.principalDisplayName);
        writer.writeGuidValue("principalId", appRoleAssignment.principalId);
        writer.writeStringValue("principalType", appRoleAssignment.principalType);
        writer.writeStringValue("resourceDisplayName", appRoleAssignment.resourceDisplayName);
        writer.writeGuidValue("resourceId", appRoleAssignment.resourceId);
}
