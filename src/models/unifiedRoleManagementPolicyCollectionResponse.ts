import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type UnifiedRoleManagementPolicy } from './unifiedRoleManagementPolicy';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface UnifiedRoleManagementPolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UnifiedRoleManagementPolicy[] | undefined;
}
