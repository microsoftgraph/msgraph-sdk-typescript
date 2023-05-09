import {createRolePermissionFromDiscriminatorValue} from '../../models/createRolePermissionFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {RolePermission} from '../../models/rolePermission';
import {serializeRolePermission} from '../../models/serializeRolePermission';
import {GetEffectivePermissionsWithScopeResponse} from './getEffectivePermissionsWithScopeResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetEffectivePermissionsWithScopeResponse(getEffectivePermissionsWithScopeResponse: GetEffectivePermissionsWithScopeResponse | undefined = {} as GetEffectivePermissionsWithScopeResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getEffectivePermissionsWithScopeResponse),
        "value": n => { getEffectivePermissionsWithScopeResponse.value = n.getCollectionOfObjectValues<RolePermission>(createRolePermissionFromDiscriminatorValue); },
    }
}
