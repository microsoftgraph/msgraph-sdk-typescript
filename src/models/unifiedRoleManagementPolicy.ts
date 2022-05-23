import {Entity} from './entity';
import {Identity} from './identity';
import {UnifiedRoleManagementPolicyRule} from './unifiedRoleManagementPolicyRule';

export interface UnifiedRoleManagementPolicy extends Entity{
    /** Description for the policy. */
    description?:string | undefined;
    /** Display name for the policy. */
    displayName?:string | undefined;
    /** Not implemented. The list of effective rules like approval rules and expiration rules evaluated based on inherited referenced rules. For example, if there is a tenant-wide policy to enforce enabling an approval rule, the effective rule will be to enable approval even if the policy has a rule to disable approval. */
    effectiveRules?:UnifiedRoleManagementPolicyRule[] | undefined;
    /** This can only be set to true for a single tenant wide policy which will apply to all scopes and roles. Set the scopeId to '/' and scopeType to Directory. */
    isOrganizationDefault?:boolean | undefined;
    /** The identity who last modified the role setting. */
    lastModifiedBy?:Identity | undefined;
    /** The time when the role setting was last modified. */
    lastModifiedDateTime?:Date | undefined;
    /** The collection of rules like approval rules and expiration rules. */
    rules?:UnifiedRoleManagementPolicyRule[] | undefined;
    /** The id of the scope where the policy is created. Can be / for the tenant or a group ID. Required. */
    scopeId?:string | undefined;
    /** The type of the scope where the policy is created. One of Directory, DirectoryRole. Required. */
    scopeType?:string | undefined;
}
