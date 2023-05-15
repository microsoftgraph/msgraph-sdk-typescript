import {deserializeIntoAndroidManagedAppProtection} from './deserializeIntoAndroidManagedAppProtection';
import {deserializeIntoDefaultManagedAppProtection} from './deserializeIntoDefaultManagedAppProtection';
import {deserializeIntoIosManagedAppProtection} from './deserializeIntoIosManagedAppProtection';
import {deserializeIntoManagedAppConfiguration} from './deserializeIntoManagedAppConfiguration';
import {deserializeIntoManagedAppPolicy} from './deserializeIntoManagedAppPolicy';
import {deserializeIntoManagedAppProtection} from './deserializeIntoManagedAppProtection';
import {deserializeIntoMdmWindowsInformationProtectionPolicy} from './deserializeIntoMdmWindowsInformationProtectionPolicy';
import {deserializeIntoTargetedManagedAppConfiguration} from './deserializeIntoTargetedManagedAppConfiguration';
import {deserializeIntoTargetedManagedAppProtection} from './deserializeIntoTargetedManagedAppProtection';
import {deserializeIntoWindowsInformationProtection} from './deserializeIntoWindowsInformationProtection';
import {deserializeIntoWindowsInformationProtectionPolicy} from './deserializeIntoWindowsInformationProtectionPolicy';
import {AndroidManagedAppProtection, DefaultManagedAppProtection, IosManagedAppProtection, ManagedAppConfiguration, ManagedAppPolicy, ManagedAppProtection, MdmWindowsInformationProtectionPolicy, TargetedManagedAppConfiguration, TargetedManagedAppProtection, WindowsInformationProtection, WindowsInformationProtectionPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.androidManagedAppProtection":
                    return deserializeIntoAndroidManagedAppProtection;
                case "#microsoft.graph.defaultManagedAppProtection":
                    return deserializeIntoDefaultManagedAppProtection;
                case "#microsoft.graph.iosManagedAppProtection":
                    return deserializeIntoIosManagedAppProtection;
                case "#microsoft.graph.managedAppConfiguration":
                    return deserializeIntoManagedAppConfiguration;
                case "#microsoft.graph.managedAppProtection":
                    return deserializeIntoManagedAppProtection;
                case "#microsoft.graph.mdmWindowsInformationProtectionPolicy":
                    return deserializeIntoMdmWindowsInformationProtectionPolicy;
                case "#microsoft.graph.targetedManagedAppConfiguration":
                    return deserializeIntoTargetedManagedAppConfiguration;
                case "#microsoft.graph.targetedManagedAppProtection":
                    return deserializeIntoTargetedManagedAppProtection;
                case "#microsoft.graph.windowsInformationProtection":
                    return deserializeIntoWindowsInformationProtection;
                case "#microsoft.graph.windowsInformationProtectionPolicy":
                    return deserializeIntoWindowsInformationProtectionPolicy;
            }
        }
    }
    return deserializeIntoManagedAppPolicy;
}
