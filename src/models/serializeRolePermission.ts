import {ResourceAction} from './resourceAction';
import {RolePermission} from './rolePermission';
import {serializeResourceAction} from './serializeResourceAction';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRolePermission(writer: SerializationWriter, rolePermission: RolePermission | undefined = {} as RolePermission) : void {
        writer.writeStringValue("@odata.type", rolePermission.odataType);
        writer.writeCollectionOfObjectValues<ResourceAction>("resourceActions", rolePermission.resourceActions, serializeResourceAction);
        writer.writeAdditionalData(rolePermission.additionalData);
}
