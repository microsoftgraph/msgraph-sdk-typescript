import {createIdentityFromDiscriminatorValue} from './createIdentityFromDiscriminatorValue';
import {createUnifiedRoleManagementPolicyRuleFromDiscriminatorValue} from './createUnifiedRoleManagementPolicyRuleFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Identity} from './identity';
import {serializeIdentity} from './serializeIdentity';
import {serializeUnifiedRoleManagementPolicyRule} from './serializeUnifiedRoleManagementPolicyRule';
import {UnifiedRoleManagementPolicy} from './unifiedRoleManagementPolicy';
import {UnifiedRoleManagementPolicyRule} from './unifiedRoleManagementPolicyRule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleManagementPolicy(unifiedRoleManagementPolicy: UnifiedRoleManagementPolicy | undefined = {} as UnifiedRoleManagementPolicy) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(unifiedRoleManagementPolicy),
        "description": n => { unifiedRoleManagementPolicy.description = n.getStringValue(); },
        "displayName": n => { unifiedRoleManagementPolicy.displayName = n.getStringValue(); },
        "effectiveRules": n => { unifiedRoleManagementPolicy.effectiveRules = n.getCollectionOfObjectValues<UnifiedRoleManagementPolicyRule>(createUnifiedRoleManagementPolicyRuleFromDiscriminatorValue); },
        "isOrganizationDefault": n => { unifiedRoleManagementPolicy.isOrganizationDefault = n.getBooleanValue(); },
        "lastModifiedBy": n => { unifiedRoleManagementPolicy.lastModifiedBy = n.getObjectValue<Identity>(createIdentityFromDiscriminatorValue); },
        "lastModifiedDateTime": n => { unifiedRoleManagementPolicy.lastModifiedDateTime = n.getDateValue(); },
        "rules": n => { unifiedRoleManagementPolicy.rules = n.getCollectionOfObjectValues<UnifiedRoleManagementPolicyRule>(createUnifiedRoleManagementPolicyRuleFromDiscriminatorValue); },
        "scopeId": n => { unifiedRoleManagementPolicy.scopeId = n.getStringValue(); },
        "scopeType": n => { unifiedRoleManagementPolicy.scopeType = n.getStringValue(); },
    }
}
