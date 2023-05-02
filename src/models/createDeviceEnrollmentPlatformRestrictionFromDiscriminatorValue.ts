import {deserializeIntoDeviceEnrollmentPlatformRestriction} from './deserializeIntoDeviceEnrollmentPlatformRestriction';
import {DeviceEnrollmentPlatformRestriction} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceEnrollmentPlatformRestrictionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceEnrollmentPlatformRestriction;
}
