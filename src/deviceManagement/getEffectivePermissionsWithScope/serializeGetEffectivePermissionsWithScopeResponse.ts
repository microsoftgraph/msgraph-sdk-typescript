import {RolePermission} from '../../models/rolePermission';
import {serializeBaseCollectionPaginationCountResponse} from '../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeRolePermission} from '../../models/serializeRolePermission';
import {GetEffectivePermissionsWithScopeResponse} from './getEffectivePermissionsWithScopeResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetEffectivePermissionsWithScopeResponse(getEffectivePermissionsWithScopeResponse: GetEffectivePermissionsWithScopeResponse | undefined = {} as GetEffectivePermissionsWithScopeResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getEffectivePermissionsWithScopeResponse)
        writer.writeCollectionOfObjectValues<RolePermission>("value", getEffectivePermissionsWithScopeResponse.value, serializeRolePermission);
}
