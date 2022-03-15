import {DeviceEnrollmentConfiguration} from './deviceEnrollmentConfiguration';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceEnrollmentConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceEnrollmentConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceEnrollmentConfiguration();
}
