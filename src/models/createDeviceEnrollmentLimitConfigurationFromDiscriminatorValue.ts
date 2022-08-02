import {DeviceEnrollmentLimitConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceEnrollmentLimitConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceEnrollmentLimitConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceEnrollmentLimitConfiguration();
}
