import {DeviceEnrollmentConfigurationImpl, DeviceEnrollmentLimitConfigurationImpl, DeviceEnrollmentPlatformRestrictionsConfigurationImpl, DeviceEnrollmentWindowsHelloForBusinessConfigurationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceEnrollmentConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceEnrollmentConfigurationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.deviceEnrollmentLimitConfiguration":
                    return new DeviceEnrollmentLimitConfigurationImpl();
                case "#microsoft.graph.deviceEnrollmentPlatformRestrictionsConfiguration":
                    return new DeviceEnrollmentPlatformRestrictionsConfigurationImpl();
                case "#microsoft.graph.deviceEnrollmentWindowsHelloForBusinessConfiguration":
                    return new DeviceEnrollmentWindowsHelloForBusinessConfigurationImpl();
            }
        }
    }
    return new DeviceEnrollmentConfigurationImpl();
}
