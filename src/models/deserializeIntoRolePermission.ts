import {createResourceActionFromDiscriminatorValue} from './createResourceActionFromDiscriminatorValue';
import {ResourceAction} from './resourceAction';
import {RolePermission} from './rolePermission';
import {serializeResourceAction} from './serializeResourceAction';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRolePermission(rolePermission: RolePermission | undefined = {} as RolePermission) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { rolePermission.odataType = n.getStringValue(); },
        "resourceActions": n => { rolePermission.resourceActions = n.getCollectionOfObjectValues<ResourceAction>(createResourceActionFromDiscriminatorValue); },
    }
}
