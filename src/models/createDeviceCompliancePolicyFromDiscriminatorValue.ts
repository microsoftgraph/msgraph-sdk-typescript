import {AndroidCompliancePolicy, AndroidWorkProfileCompliancePolicy, DeviceCompliancePolicy, IosCompliancePolicy, MacOSCompliancePolicy, Windows10CompliancePolicy, Windows10MobileCompliancePolicy, Windows81CompliancePolicy, WindowsPhone81CompliancePolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceCompliancePolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceCompliancePolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.androidCompliancePolicy":
                    return new AndroidCompliancePolicy();
                case "#microsoft.graph.androidWorkProfileCompliancePolicy":
                    return new AndroidWorkProfileCompliancePolicy();
                case "#microsoft.graph.iosCompliancePolicy":
                    return new IosCompliancePolicy();
                case "#microsoft.graph.macOSCompliancePolicy":
                    return new MacOSCompliancePolicy();
                case "#microsoft.graph.windows10CompliancePolicy":
                    return new Windows10CompliancePolicy();
                case "#microsoft.graph.windows10MobileCompliancePolicy":
                    return new Windows10MobileCompliancePolicy();
                case "#microsoft.graph.windows81CompliancePolicy":
                    return new Windows81CompliancePolicy();
                case "#microsoft.graph.windowsPhone81CompliancePolicy":
                    return new WindowsPhone81CompliancePolicy();
            }
        }
    }
    return new DeviceCompliancePolicy();
}
