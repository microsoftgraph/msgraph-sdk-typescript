import {KeyValuePair} from './keyValuePair';
import {ManagedAppConfiguration} from './managedAppConfiguration';
import {serializeKeyValuePair} from './serializeKeyValuePair';
import {serializeManagedAppPolicy} from './serializeManagedAppPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedAppConfiguration(writer: SerializationWriter, managedAppConfiguration: ManagedAppConfiguration | undefined = {} as ManagedAppConfiguration) : void {
        serializeManagedAppPolicy(writer, managedAppConfiguration)
        writer.writeCollectionOfObjectValues<KeyValuePair>("customSettings", managedAppConfiguration.customSettings, serializeKeyValuePair);
}
