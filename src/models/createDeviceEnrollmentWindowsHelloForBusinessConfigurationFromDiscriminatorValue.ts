import {DeviceEnrollmentWindowsHelloForBusinessConfigurationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceEnrollmentWindowsHelloForBusinessConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceEnrollmentWindowsHelloForBusinessConfigurationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceEnrollmentWindowsHelloForBusinessConfigurationImpl();
}
