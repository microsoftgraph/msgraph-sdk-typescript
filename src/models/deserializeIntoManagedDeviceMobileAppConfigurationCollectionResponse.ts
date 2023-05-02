import {createManagedDeviceMobileAppConfigurationFromDiscriminatorValue} from './createManagedDeviceMobileAppConfigurationFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {ManagedDeviceMobileAppConfiguration} from './managedDeviceMobileAppConfiguration';
import {ManagedDeviceMobileAppConfigurationCollectionResponse} from './managedDeviceMobileAppConfigurationCollectionResponse';
import {serializeManagedDeviceMobileAppConfiguration} from './serializeManagedDeviceMobileAppConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedDeviceMobileAppConfigurationCollectionResponse(managedDeviceMobileAppConfigurationCollectionResponse: ManagedDeviceMobileAppConfigurationCollectionResponse | undefined = {} as ManagedDeviceMobileAppConfigurationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(managedDeviceMobileAppConfigurationCollectionResponse),
        "value": n => { managedDeviceMobileAppConfigurationCollectionResponse.value = n.getCollectionOfObjectValues<ManagedDeviceMobileAppConfiguration>(createManagedDeviceMobileAppConfigurationFromDiscriminatorValue); },
    }
}
