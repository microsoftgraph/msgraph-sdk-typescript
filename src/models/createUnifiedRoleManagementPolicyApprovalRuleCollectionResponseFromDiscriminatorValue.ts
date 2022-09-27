import {UnifiedRoleManagementPolicyApprovalRuleCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleManagementPolicyApprovalRuleCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRoleManagementPolicyApprovalRuleCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnifiedRoleManagementPolicyApprovalRuleCollectionResponse();
}
