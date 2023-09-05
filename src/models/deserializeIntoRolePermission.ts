import { createResourceActionFromDiscriminatorValue } from './createResourceActionFromDiscriminatorValue';
import { type ResourceAction } from './resourceAction';
import { type RolePermission } from './rolePermission';
import { serializeResourceAction } from './serializeResourceAction';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoRolePermission(rolePermission: RolePermission | undefined = {} as RolePermission) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { rolePermission.odataType = n.getStringValue(); },
        "resourceActions": n => { rolePermission.resourceActions = n.getCollectionOfObjectValues<ResourceAction>(createResourceActionFromDiscriminatorValue); },
    }
}
