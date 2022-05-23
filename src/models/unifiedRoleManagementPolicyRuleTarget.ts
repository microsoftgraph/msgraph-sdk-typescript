import {DirectoryObject} from './directoryObject';

export interface UnifiedRoleManagementPolicyRuleTarget{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The caller for the policy rule target. Allowed values are: None, Admin, EndUser. */
    caller?:string | undefined;
    /** The list of settings which are enforced and cannot be overridden by child scopes. Use All for all settings. */
    enforcedSettings?:string[] | undefined;
    /** The list of settings which can be inherited by child scopes. Use All for all settings. */
    inheritableSettings?:string[] | undefined;
    /** The level for the policy rule target. Allowed values are: Eligibility, Assignment. */
    level?:string | undefined;
    /** The operations for policy rule target. Allowed values are: All, Activate, Deactivate, Assign, Update, Remove, Extend, Renew. */
    operations?:string[] | undefined;
    /** The targetObjects property */
    targetObjects?:DirectoryObject[] | undefined;
}
