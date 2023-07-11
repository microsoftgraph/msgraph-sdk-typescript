import {BaseCollectionPaginationCountResponse} from '../../models/baseCollectionPaginationCountResponse';
import {RolePermission} from '../../models/rolePermission';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetEffectivePermissionsWithScopeResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: RolePermission[] | undefined;
}
