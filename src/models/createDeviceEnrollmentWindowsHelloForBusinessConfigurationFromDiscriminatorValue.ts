import {DeviceEnrollmentWindowsHelloForBusinessConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceEnrollmentWindowsHelloForBusinessConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceEnrollmentWindowsHelloForBusinessConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceEnrollmentWindowsHelloForBusinessConfiguration();
}
