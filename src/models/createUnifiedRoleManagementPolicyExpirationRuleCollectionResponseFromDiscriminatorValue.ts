import {UnifiedRoleManagementPolicyExpirationRuleCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleManagementPolicyExpirationRuleCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRoleManagementPolicyExpirationRuleCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnifiedRoleManagementPolicyExpirationRuleCollectionResponse();
}
