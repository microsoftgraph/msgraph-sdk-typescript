import { deserializeIntoManagedDeviceMobileAppConfigurationUserStatusCollectionResponse } from './deserializeIntoManagedDeviceMobileAppConfigurationUserStatusCollectionResponse';
import { type ManagedDeviceMobileAppConfigurationUserStatusCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createManagedDeviceMobileAppConfigurationUserStatusCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedDeviceMobileAppConfigurationUserStatusCollectionResponse;
}
