import { deserializeIntoUnifiedRoleManagementPolicyRuleCollectionResponse } from './deserializeIntoUnifiedRoleManagementPolicyRuleCollectionResponse';
import { type UnifiedRoleManagementPolicyRuleCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUnifiedRoleManagementPolicyRuleCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRoleManagementPolicyRuleCollectionResponse;
}
