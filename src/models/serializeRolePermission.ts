import { type ResourceAction } from './resourceAction';
import { type RolePermission } from './rolePermission';
import { serializeResourceAction } from './serializeResourceAction';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeRolePermission(writer: SerializationWriter, rolePermission: RolePermission | undefined = {} as RolePermission) : void {
        writer.writeStringValue("@odata.type", rolePermission.odataType);
        writer.writeCollectionOfObjectValues<ResourceAction>("resourceActions", rolePermission.resourceActions, serializeResourceAction);
        writer.writeAdditionalData(rolePermission.additionalData);
}
