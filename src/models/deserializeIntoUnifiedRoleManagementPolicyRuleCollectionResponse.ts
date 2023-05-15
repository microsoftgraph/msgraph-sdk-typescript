import {createUnifiedRoleManagementPolicyRuleFromDiscriminatorValue} from './createUnifiedRoleManagementPolicyRuleFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleManagementPolicyRule} from './serializeUnifiedRoleManagementPolicyRule';
import {UnifiedRoleManagementPolicyRule} from './unifiedRoleManagementPolicyRule';
import {UnifiedRoleManagementPolicyRuleCollectionResponse} from './unifiedRoleManagementPolicyRuleCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleManagementPolicyRuleCollectionResponse(unifiedRoleManagementPolicyRuleCollectionResponse: UnifiedRoleManagementPolicyRuleCollectionResponse | undefined = {} as UnifiedRoleManagementPolicyRuleCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(unifiedRoleManagementPolicyRuleCollectionResponse),
        "value": n => { unifiedRoleManagementPolicyRuleCollectionResponse.value = n.getCollectionOfObjectValues<UnifiedRoleManagementPolicyRule>(createUnifiedRoleManagementPolicyRuleFromDiscriminatorValue); },
    }
}
