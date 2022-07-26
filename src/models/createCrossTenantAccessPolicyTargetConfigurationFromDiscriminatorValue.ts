import {CrossTenantAccessPolicyTargetConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCrossTenantAccessPolicyTargetConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : CrossTenantAccessPolicyTargetConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CrossTenantAccessPolicyTargetConfiguration();
}
