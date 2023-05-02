import {deserializeIntoDeviceEnrollmentConfiguration} from './deserializeIntoDeviceEnrollmentConfiguration';
import {deserializeIntoDeviceEnrollmentLimitConfiguration} from './deserializeIntoDeviceEnrollmentLimitConfiguration';
import {deserializeIntoDeviceEnrollmentPlatformRestrictionsConfiguration} from './deserializeIntoDeviceEnrollmentPlatformRestrictionsConfiguration';
import {deserializeIntoDeviceEnrollmentWindowsHelloForBusinessConfiguration} from './deserializeIntoDeviceEnrollmentWindowsHelloForBusinessConfiguration';
import {DeviceEnrollmentConfiguration, DeviceEnrollmentLimitConfiguration, DeviceEnrollmentPlatformRestrictionsConfiguration, DeviceEnrollmentWindowsHelloForBusinessConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceEnrollmentConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.deviceEnrollmentLimitConfiguration":
                    return deserializeIntoDeviceEnrollmentLimitConfiguration;
                case "#microsoft.graph.deviceEnrollmentPlatformRestrictionsConfiguration":
                    return deserializeIntoDeviceEnrollmentPlatformRestrictionsConfiguration;
                case "#microsoft.graph.deviceEnrollmentWindowsHelloForBusinessConfiguration":
                    return deserializeIntoDeviceEnrollmentWindowsHelloForBusinessConfiguration;
            }
        }
    }
    return deserializeIntoDeviceEnrollmentConfiguration;
}
