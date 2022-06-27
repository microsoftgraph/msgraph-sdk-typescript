import {Entity} from './entity';
import {UnifiedRoleManagementPolicy} from './unifiedRoleManagementPolicy';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleManagementPolicyAssignment extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The policy for the assignment. */
    policy?: UnifiedRoleManagementPolicy | undefined;
    /** The id of the policy. */
    policyId?: string | undefined;
    /** The id of the role definition where the policy applies. If not specified, the policy applies to all roles. */
    roleDefinitionId?: string | undefined;
    /** The id of the scope where the policy is assigned. E.g. '/', groupId, etc. */
    scopeId?: string | undefined;
    /** The type of the scope where the policy is assigned. One of Directory, DirectoryRole, Group. */
    scopeType?: string | undefined;
}
