import {DeviceEnrollmentPlatformRestrictionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceEnrollmentPlatformRestrictionFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceEnrollmentPlatformRestrictionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceEnrollmentPlatformRestrictionImpl();
}
