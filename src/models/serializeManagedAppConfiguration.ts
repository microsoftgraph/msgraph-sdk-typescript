import {KeyValuePair} from './keyValuePair';
import {ManagedAppConfiguration} from './managedAppConfiguration';
import {serializeKeyValuePair} from './serializeKeyValuePair';
import {serializeManagedAppPolicy} from './serializeManagedAppPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedAppConfiguration(managedAppConfiguration: ManagedAppConfiguration | undefined = {} as ManagedAppConfiguration, writer: SerializationWriter) : void {
        serializeManagedAppPolicy(writer, managedAppConfiguration)
        writer.writeCollectionOfObjectValues<KeyValuePair>("customSettings", managedAppConfiguration.customSettings, serializeKeyValuePair);
}
