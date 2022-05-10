import {DeviceEnrollmentConfigurationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceEnrollmentConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceEnrollmentConfigurationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceEnrollmentConfigurationImpl();
}
