import {UnifiedRoleManagementPolicyRule} from './unifiedRoleManagementPolicyRule';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleManagementPolicyAuthenticationContextRule extends Partial<AdditionalDataHolder>, Partial<Parsable>, UnifiedRoleManagementPolicyRule {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The value of the authentication context claim. */
    claimValue?: string | undefined;
    /** Whether this rule is enabled. */
    isEnabled?: boolean | undefined;
}
