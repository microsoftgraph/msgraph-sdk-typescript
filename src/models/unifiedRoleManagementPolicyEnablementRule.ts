import {UnifiedRoleManagementPolicyRule} from './unifiedRoleManagementPolicyRule';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleManagementPolicyEnablementRule extends Partial<AdditionalDataHolder>, Partial<Parsable>, UnifiedRoleManagementPolicyRule {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The collection of rules that are enabled for this policy rule. For example, MultiFactorAuthentication, Ticketing, and Justification. */
    enabledRules?: string[] | undefined;
}
