import { deserializeIntoManagedDeviceMobileAppConfigurationDeviceStatus } from './deserializeIntoManagedDeviceMobileAppConfigurationDeviceStatus';
import { type ManagedDeviceMobileAppConfigurationDeviceStatus } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createManagedDeviceMobileAppConfigurationDeviceStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedDeviceMobileAppConfigurationDeviceStatus;
}
