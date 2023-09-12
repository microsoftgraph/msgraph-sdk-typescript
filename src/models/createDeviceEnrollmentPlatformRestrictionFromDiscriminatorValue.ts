import { deserializeIntoDeviceEnrollmentPlatformRestriction } from './deserializeIntoDeviceEnrollmentPlatformRestriction';
import { type DeviceEnrollmentPlatformRestriction } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceEnrollmentPlatformRestrictionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceEnrollmentPlatformRestriction;
}
