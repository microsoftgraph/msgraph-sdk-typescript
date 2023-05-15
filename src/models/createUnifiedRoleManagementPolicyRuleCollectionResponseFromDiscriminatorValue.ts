import {deserializeIntoUnifiedRoleManagementPolicyRuleCollectionResponse} from './deserializeIntoUnifiedRoleManagementPolicyRuleCollectionResponse';
import {UnifiedRoleManagementPolicyRuleCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleManagementPolicyRuleCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRoleManagementPolicyRuleCollectionResponse;
}
