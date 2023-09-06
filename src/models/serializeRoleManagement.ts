import { type RbacApplication } from './rbacApplication';
import { type RoleManagement } from './roleManagement';
import { serializeRbacApplication } from './serializeRbacApplication';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeRoleManagement(writer: SerializationWriter, roleManagement: RoleManagement | undefined = {} as RoleManagement) : void {
        writer.writeObjectValue<RbacApplication>("directory", roleManagement.directory, serializeRbacApplication);
        writer.writeObjectValue<RbacApplication>("entitlementManagement", roleManagement.entitlementManagement, serializeRbacApplication);
        writer.writeStringValue("@odata.type", roleManagement.odataType);
        writer.writeAdditionalData(roleManagement.additionalData);
}
