import {UnifiedRoleManagementPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleManagementPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRoleManagementPolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnifiedRoleManagementPolicy();
}
