import { type BaseCollectionPaginationCountResponse } from '../../models/baseCollectionPaginationCountResponse';
import { type RolePermission } from '../../models/rolePermission';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface GetEffectivePermissionsWithScopeResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: RolePermission[] | undefined;
}
