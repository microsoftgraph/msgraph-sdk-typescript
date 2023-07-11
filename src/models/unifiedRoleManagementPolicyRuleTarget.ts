import {DirectoryObject} from './directoryObject';
import {UnifiedRoleManagementPolicyRuleTargetOperations} from './unifiedRoleManagementPolicyRuleTargetOperations';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleManagementPolicyRuleTarget extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The type of caller that's the target of the policy rule. Allowed values are: None, Admin, EndUser.
     */
    caller?: string | undefined;
    /**
     * The list of role settings that are enforced and cannot be overridden by child scopes. Use All for all settings.
     */
    enforcedSettings?: string[] | undefined;
    /**
     * The list of role settings that can be inherited by child scopes. Use All for all settings.
     */
    inheritableSettings?: string[] | undefined;
    /**
     * The role assignment type that's the target of policy rule. Allowed values are: Eligibility, Assignment.
     */
    level?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The role management operations that are the target of the policy rule. Allowed values are: All, Activate, Deactivate, Assign, Update, Remove, Extend, Renew.
     */
    operations?: UnifiedRoleManagementPolicyRuleTargetOperations[] | undefined;
    /**
     * The targetObjects property
     */
    targetObjects?: DirectoryObject[] | undefined;
}
