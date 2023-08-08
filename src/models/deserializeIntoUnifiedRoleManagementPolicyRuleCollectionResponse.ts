import {createUnifiedRoleManagementPolicyRuleFromDiscriminatorValue} from './createUnifiedRoleManagementPolicyRuleFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleManagementPolicyRule} from './serializeUnifiedRoleManagementPolicyRule';
import type {UnifiedRoleManagementPolicyRule} from './unifiedRoleManagementPolicyRule';
import type {UnifiedRoleManagementPolicyRuleCollectionResponse} from './unifiedRoleManagementPolicyRuleCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleManagementPolicyRuleCollectionResponse(unifiedRoleManagementPolicyRuleCollectionResponse: UnifiedRoleManagementPolicyRuleCollectionResponse | undefined = {} as UnifiedRoleManagementPolicyRuleCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(unifiedRoleManagementPolicyRuleCollectionResponse),
        "value": n => { unifiedRoleManagementPolicyRuleCollectionResponse.value = n.getCollectionOfObjectValues<UnifiedRoleManagementPolicyRule>(createUnifiedRoleManagementPolicyRuleFromDiscriminatorValue); },
    }
}
