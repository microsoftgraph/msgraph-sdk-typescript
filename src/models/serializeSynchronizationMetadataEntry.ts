import {SynchronizationMetadata} from './synchronizationMetadata';
import type {SynchronizationMetadataEntry} from './synchronizationMetadataEntry';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSynchronizationMetadataEntry(writer: SerializationWriter, synchronizationMetadataEntry: SynchronizationMetadataEntry | undefined = {} as SynchronizationMetadataEntry) : void {
        writer.writeEnumValue<SynchronizationMetadata>("key", synchronizationMetadataEntry.key);
        writer.writeStringValue("@odata.type", synchronizationMetadataEntry.odataType);
        writer.writeStringValue("value", synchronizationMetadataEntry.value);
        writer.writeAdditionalData(synchronizationMetadataEntry.additionalData);
}
