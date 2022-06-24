import {AndroidCompliancePolicyImpl, AndroidWorkProfileCompliancePolicyImpl, DeviceCompliancePolicyImpl, IosCompliancePolicyImpl, MacOSCompliancePolicyImpl, Windows10CompliancePolicyImpl, Windows10MobileCompliancePolicyImpl, Windows81CompliancePolicyImpl, WindowsPhone81CompliancePolicyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceCompliancePolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceCompliancePolicyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.androidCompliancePolicy":
                    return new AndroidCompliancePolicyImpl();
                case "#microsoft.graph.androidWorkProfileCompliancePolicy":
                    return new AndroidWorkProfileCompliancePolicyImpl();
                case "#microsoft.graph.iosCompliancePolicy":
                    return new IosCompliancePolicyImpl();
                case "#microsoft.graph.macOSCompliancePolicy":
                    return new MacOSCompliancePolicyImpl();
                case "#microsoft.graph.windows10CompliancePolicy":
                    return new Windows10CompliancePolicyImpl();
                case "#microsoft.graph.windows10MobileCompliancePolicy":
                    return new Windows10MobileCompliancePolicyImpl();
                case "#microsoft.graph.windows81CompliancePolicy":
                    return new Windows81CompliancePolicyImpl();
                case "#microsoft.graph.windowsPhone81CompliancePolicy":
                    return new WindowsPhone81CompliancePolicyImpl();
            }
        }
    }
    return new DeviceCompliancePolicyImpl();
}
