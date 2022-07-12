import {DeviceEnrollmentConfiguration, DeviceEnrollmentLimitConfiguration, DeviceEnrollmentPlatformRestrictionsConfiguration, DeviceEnrollmentWindowsHelloForBusinessConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceEnrollmentConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceEnrollmentConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.deviceEnrollmentLimitConfiguration":
                    return new DeviceEnrollmentLimitConfiguration();
                case "#microsoft.graph.deviceEnrollmentPlatformRestrictionsConfiguration":
                    return new DeviceEnrollmentPlatformRestrictionsConfiguration();
                case "#microsoft.graph.deviceEnrollmentWindowsHelloForBusinessConfiguration":
                    return new DeviceEnrollmentWindowsHelloForBusinessConfiguration();
            }
        }
    }
    return new DeviceEnrollmentConfiguration();
}
