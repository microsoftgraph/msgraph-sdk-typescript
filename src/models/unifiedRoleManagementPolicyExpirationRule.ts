import {UnifiedRoleManagementPolicyRule} from './unifiedRoleManagementPolicyRule';
import {Duration, Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleManagementPolicyExpirationRule extends Parsable, UnifiedRoleManagementPolicyRule {
    /**
     * Indicates whether expiration is required or if it's a permanently active assignment or eligibility.
     */
    isExpirationRequired?: boolean | undefined;
    /**
     * The maximum duration allowed for eligibility or assignment which is not permanent. Required when isExpirationRequired is true.
     */
    maximumDuration?: Duration | undefined;
}
