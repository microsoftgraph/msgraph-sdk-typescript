import {DeviceEnrollmentWindowsHelloForBusinessConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceEnrollmentWindowsHelloForBusinessConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceEnrollmentWindowsHelloForBusinessConfigurationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceEnrollmentWindowsHelloForBusinessConfigurationCollectionResponse();
}
