import {DeviceEnrollmentPlatformRestriction} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceEnrollmentPlatformRestrictionFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceEnrollmentPlatformRestriction {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceEnrollmentPlatformRestriction();
}
