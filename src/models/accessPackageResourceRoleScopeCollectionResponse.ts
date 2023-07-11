import {AccessPackageResourceRoleScope} from './accessPackageResourceRoleScope';
import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackageResourceRoleScopeCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: AccessPackageResourceRoleScope[] | undefined;
}
