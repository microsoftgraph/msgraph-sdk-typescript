import {DeviceEnrollmentConfigurationCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceEnrollmentConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceEnrollmentConfigurationCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceEnrollmentConfigurationCollectionResponseImpl();
}
