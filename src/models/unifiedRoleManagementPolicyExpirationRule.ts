import {UnifiedRoleManagementPolicyRule} from './unifiedRoleManagementPolicyRule';
import {AdditionalDataHolder, Duration, Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleManagementPolicyExpirationRule extends Partial<AdditionalDataHolder>, Partial<Parsable>, UnifiedRoleManagementPolicyRule {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Indicates whether expiration is required or if it's a permanently active assignment or eligibility. */
    isExpirationRequired?: boolean | undefined;
    /** The maximum duration allowed for eligibility or assignment which is not permanent. Required when isExpirationRequired is true. */
    maximumDuration?: Duration | undefined;
}
