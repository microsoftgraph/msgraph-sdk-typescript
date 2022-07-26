import {CrossTenantAccessPolicyB2BSetting} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCrossTenantAccessPolicyB2BSettingFromDiscriminatorValue(parseNode: ParseNode | undefined) : CrossTenantAccessPolicyB2BSetting {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CrossTenantAccessPolicyB2BSetting();
}
