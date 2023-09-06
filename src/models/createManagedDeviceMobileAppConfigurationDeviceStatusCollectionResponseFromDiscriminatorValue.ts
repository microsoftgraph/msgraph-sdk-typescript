import { deserializeIntoManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponse } from './deserializeIntoManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponse';
import { type ManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponse;
}
