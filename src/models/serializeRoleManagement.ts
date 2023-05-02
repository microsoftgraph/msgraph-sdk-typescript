import {RbacApplication} from './rbacApplication';
import {RoleManagement} from './roleManagement';
import {serializeRbacApplication} from './serializeRbacApplication';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRoleManagement(writer: SerializationWriter, roleManagement: RoleManagement | undefined = {} as RoleManagement) : void {
        writer.writeObjectValue<RbacApplication>("directory", roleManagement.directory, serializeRbacApplication);
        writer.writeObjectValue<RbacApplication>("entitlementManagement", roleManagement.entitlementManagement, serializeRbacApplication);
        writer.writeStringValue("@odata.type", roleManagement.odataType);
        writer.writeAdditionalData(roleManagement.additionalData);
}
