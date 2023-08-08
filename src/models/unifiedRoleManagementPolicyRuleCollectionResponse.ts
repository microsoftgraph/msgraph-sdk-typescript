import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {UnifiedRoleManagementPolicyRule} from './unifiedRoleManagementPolicyRule';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleManagementPolicyRuleCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UnifiedRoleManagementPolicyRule[] | undefined;
}
