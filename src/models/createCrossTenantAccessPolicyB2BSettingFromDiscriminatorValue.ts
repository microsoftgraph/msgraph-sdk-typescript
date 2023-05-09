import {deserializeIntoCrossTenantAccessPolicyB2BSetting} from './deserializeIntoCrossTenantAccessPolicyB2BSetting';
import {CrossTenantAccessPolicyB2BSetting} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCrossTenantAccessPolicyB2BSettingFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCrossTenantAccessPolicyB2BSetting;
}
