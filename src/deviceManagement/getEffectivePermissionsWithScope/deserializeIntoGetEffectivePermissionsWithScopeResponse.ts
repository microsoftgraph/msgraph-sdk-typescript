import { createRolePermissionFromDiscriminatorValue } from '../../models/createRolePermissionFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from '../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import { type RolePermission } from '../../models/rolePermission';
import { serializeRolePermission } from '../../models/serializeRolePermission';
import { type GetEffectivePermissionsWithScopeResponse } from './getEffectivePermissionsWithScopeResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoGetEffectivePermissionsWithScopeResponse(getEffectivePermissionsWithScopeResponse: GetEffectivePermissionsWithScopeResponse | undefined = {} as GetEffectivePermissionsWithScopeResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getEffectivePermissionsWithScopeResponse),
        "value": n => { getEffectivePermissionsWithScopeResponse.value = n.getCollectionOfObjectValues<RolePermission>(createRolePermissionFromDiscriminatorValue); },
    }
}
