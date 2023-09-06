import { type KeyValuePair } from './keyValuePair';
import { type ManagedAppConfiguration } from './managedAppConfiguration';
import { serializeKeyValuePair } from './serializeKeyValuePair';
import { serializeManagedAppPolicy } from './serializeManagedAppPolicy';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeManagedAppConfiguration(writer: SerializationWriter, managedAppConfiguration: ManagedAppConfiguration | undefined = {} as ManagedAppConfiguration) : void {
        serializeManagedAppPolicy(writer, managedAppConfiguration)
        writer.writeCollectionOfObjectValues<KeyValuePair>("customSettings", managedAppConfiguration.customSettings, serializeKeyValuePair);
}
