import {deserializeIntoDeviceEnrollmentLimitConfiguration} from './deserializeIntoDeviceEnrollmentLimitConfiguration';
import {DeviceEnrollmentLimitConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceEnrollmentLimitConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceEnrollmentLimitConfiguration;
}
