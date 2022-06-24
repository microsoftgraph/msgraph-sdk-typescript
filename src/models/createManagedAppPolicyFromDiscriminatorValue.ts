import {ManagedAppConfigurationImpl, ManagedAppPolicyImpl, ManagedAppProtectionImpl, WindowsInformationProtectionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAppPolicyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.managedAppConfiguration":
                    return new ManagedAppConfigurationImpl();
                case "#microsoft.graph.managedAppProtection":
                    return new ManagedAppProtectionImpl();
                case "#microsoft.graph.windowsInformationProtection":
                    return new WindowsInformationProtectionImpl();
            }
        }
    }
    return new ManagedAppPolicyImpl();
}
