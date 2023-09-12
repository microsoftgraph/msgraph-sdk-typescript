import { createManagedDeviceMobileAppConfigurationUserStatusFromDiscriminatorValue } from './createManagedDeviceMobileAppConfigurationUserStatusFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type ManagedDeviceMobileAppConfigurationUserStatus } from './managedDeviceMobileAppConfigurationUserStatus';
import { type ManagedDeviceMobileAppConfigurationUserStatusCollectionResponse } from './managedDeviceMobileAppConfigurationUserStatusCollectionResponse';
import { serializeManagedDeviceMobileAppConfigurationUserStatus } from './serializeManagedDeviceMobileAppConfigurationUserStatus';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedDeviceMobileAppConfigurationUserStatusCollectionResponse(managedDeviceMobileAppConfigurationUserStatusCollectionResponse: ManagedDeviceMobileAppConfigurationUserStatusCollectionResponse | undefined = {} as ManagedDeviceMobileAppConfigurationUserStatusCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(managedDeviceMobileAppConfigurationUserStatusCollectionResponse),
        "value": n => { managedDeviceMobileAppConfigurationUserStatusCollectionResponse.value = n.getCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationUserStatus>(createManagedDeviceMobileAppConfigurationUserStatusFromDiscriminatorValue); },
    }
}
