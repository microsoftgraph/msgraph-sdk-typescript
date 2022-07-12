import {ManagedAppConfiguration, ManagedAppPolicy, ManagedAppProtection, WindowsInformationProtection} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAppPolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.managedAppConfiguration":
                    return new ManagedAppConfiguration();
                case "#microsoft.graph.managedAppProtection":
                    return new ManagedAppProtection();
                case "#microsoft.graph.windowsInformationProtection":
                    return new WindowsInformationProtection();
            }
        }
    }
    return new ManagedAppPolicy();
}
