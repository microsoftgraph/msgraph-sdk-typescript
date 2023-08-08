import {createKeyValuePairFromDiscriminatorValue} from './createKeyValuePairFromDiscriminatorValue';
import {deserializeIntoManagedAppPolicy} from './deserializeIntoManagedAppPolicy';
import type {KeyValuePair} from './keyValuePair';
import type {ManagedAppConfiguration} from './managedAppConfiguration';
import {serializeKeyValuePair} from './serializeKeyValuePair';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedAppConfiguration(managedAppConfiguration: ManagedAppConfiguration | undefined = {} as ManagedAppConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoManagedAppPolicy(managedAppConfiguration),
        "customSettings": n => { managedAppConfiguration.customSettings = n.getCollectionOfObjectValues<KeyValuePair>(createKeyValuePairFromDiscriminatorValue); },
    }
}
