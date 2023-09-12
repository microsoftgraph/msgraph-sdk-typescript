import { type RolePermission } from '../../models/rolePermission';
import { serializeBaseCollectionPaginationCountResponse } from '../../models/serializeBaseCollectionPaginationCountResponse';
import { serializeRolePermission } from '../../models/serializeRolePermission';
import { type GetEffectivePermissionsWithScopeResponse } from './getEffectivePermissionsWithScopeResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeGetEffectivePermissionsWithScopeResponse(writer: SerializationWriter, getEffectivePermissionsWithScopeResponse: GetEffectivePermissionsWithScopeResponse | undefined = {} as GetEffectivePermissionsWithScopeResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getEffectivePermissionsWithScopeResponse)
        writer.writeCollectionOfObjectValues<RolePermission>("value", getEffectivePermissionsWithScopeResponse.value, serializeRolePermission);
}
