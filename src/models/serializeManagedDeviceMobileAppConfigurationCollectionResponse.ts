import type {ManagedDeviceMobileAppConfiguration} from './managedDeviceMobileAppConfiguration';
import type {ManagedDeviceMobileAppConfigurationCollectionResponse} from './managedDeviceMobileAppConfigurationCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeManagedDeviceMobileAppConfiguration} from './serializeManagedDeviceMobileAppConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedDeviceMobileAppConfigurationCollectionResponse(writer: SerializationWriter, managedDeviceMobileAppConfigurationCollectionResponse: ManagedDeviceMobileAppConfigurationCollectionResponse | undefined = {} as ManagedDeviceMobileAppConfigurationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, managedDeviceMobileAppConfigurationCollectionResponse)
        writer.writeCollectionOfObjectValues<ManagedDeviceMobileAppConfiguration>("value", managedDeviceMobileAppConfigurationCollectionResponse.value, serializeManagedDeviceMobileAppConfiguration);
}
