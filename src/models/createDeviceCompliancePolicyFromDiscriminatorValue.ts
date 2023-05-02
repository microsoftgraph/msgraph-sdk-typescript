import {deserializeIntoAndroidCompliancePolicy} from './deserializeIntoAndroidCompliancePolicy';
import {deserializeIntoAndroidWorkProfileCompliancePolicy} from './deserializeIntoAndroidWorkProfileCompliancePolicy';
import {deserializeIntoDeviceCompliancePolicy} from './deserializeIntoDeviceCompliancePolicy';
import {deserializeIntoIosCompliancePolicy} from './deserializeIntoIosCompliancePolicy';
import {deserializeIntoMacOSCompliancePolicy} from './deserializeIntoMacOSCompliancePolicy';
import {deserializeIntoWindows10CompliancePolicy} from './deserializeIntoWindows10CompliancePolicy';
import {deserializeIntoWindows10MobileCompliancePolicy} from './deserializeIntoWindows10MobileCompliancePolicy';
import {deserializeIntoWindows81CompliancePolicy} from './deserializeIntoWindows81CompliancePolicy';
import {deserializeIntoWindowsPhone81CompliancePolicy} from './deserializeIntoWindowsPhone81CompliancePolicy';
import {AndroidCompliancePolicy, AndroidWorkProfileCompliancePolicy, DeviceCompliancePolicy, IosCompliancePolicy, MacOSCompliancePolicy, Windows10CompliancePolicy, Windows10MobileCompliancePolicy, Windows81CompliancePolicy, WindowsPhone81CompliancePolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceCompliancePolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.androidCompliancePolicy":
                    return deserializeIntoAndroidCompliancePolicy;
                case "#microsoft.graph.androidWorkProfileCompliancePolicy":
                    return deserializeIntoAndroidWorkProfileCompliancePolicy;
                case "#microsoft.graph.iosCompliancePolicy":
                    return deserializeIntoIosCompliancePolicy;
                case "#microsoft.graph.macOSCompliancePolicy":
                    return deserializeIntoMacOSCompliancePolicy;
                case "#microsoft.graph.windows10CompliancePolicy":
                    return deserializeIntoWindows10CompliancePolicy;
                case "#microsoft.graph.windows10MobileCompliancePolicy":
                    return deserializeIntoWindows10MobileCompliancePolicy;
                case "#microsoft.graph.windows81CompliancePolicy":
                    return deserializeIntoWindows81CompliancePolicy;
                case "#microsoft.graph.windowsPhone81CompliancePolicy":
                    return deserializeIntoWindowsPhone81CompliancePolicy;
            }
        }
    }
    return deserializeIntoDeviceCompliancePolicy;
}
