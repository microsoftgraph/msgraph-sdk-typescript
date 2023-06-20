import {AppRoleAssignment} from './appRoleAssignment';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppRoleAssignment(appRoleAssignment: AppRoleAssignment | undefined = {} as AppRoleAssignment, writer: SerializationWriter) : void {
        serializeDirectoryObject(writer, appRoleAssignment)
        writer.writeStringValue("appRoleId", appRoleAssignment.appRoleId);
        writer.writeDateValue("createdDateTime", appRoleAssignment.createdDateTime);
        writer.writeStringValue("principalDisplayName", appRoleAssignment.principalDisplayName);
        writer.writeStringValue("principalId", appRoleAssignment.principalId);
        writer.writeStringValue("principalType", appRoleAssignment.principalType);
        writer.writeStringValue("resourceDisplayName", appRoleAssignment.resourceDisplayName);
        writer.writeStringValue("resourceId", appRoleAssignment.resourceId);
}
