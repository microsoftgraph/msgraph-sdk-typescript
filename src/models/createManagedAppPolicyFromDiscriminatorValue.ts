import {AndroidManagedAppProtection, DefaultManagedAppProtection, IosManagedAppProtection, ManagedAppConfiguration, ManagedAppPolicy, ManagedAppProtection, MdmWindowsInformationProtectionPolicy, TargetedManagedAppConfiguration, TargetedManagedAppProtection, WindowsInformationProtection, WindowsInformationProtectionPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAppPolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.androidManagedAppProtection":
                    return new AndroidManagedAppProtection();
                case "#microsoft.graph.defaultManagedAppProtection":
                    return new DefaultManagedAppProtection();
                case "#microsoft.graph.iosManagedAppProtection":
                    return new IosManagedAppProtection();
                case "#microsoft.graph.managedAppConfiguration":
                    return new ManagedAppConfiguration();
                case "#microsoft.graph.managedAppProtection":
                    return new ManagedAppProtection();
                case "#microsoft.graph.mdmWindowsInformationProtectionPolicy":
                    return new MdmWindowsInformationProtectionPolicy();
                case "#microsoft.graph.targetedManagedAppConfiguration":
                    return new TargetedManagedAppConfiguration();
                case "#microsoft.graph.targetedManagedAppProtection":
                    return new TargetedManagedAppProtection();
                case "#microsoft.graph.windowsInformationProtection":
                    return new WindowsInformationProtection();
                case "#microsoft.graph.windowsInformationProtectionPolicy":
                    return new WindowsInformationProtectionPolicy();
            }
        }
    }
    return new ManagedAppPolicy();
}
