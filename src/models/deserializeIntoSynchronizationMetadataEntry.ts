import { SynchronizationMetadata } from './synchronizationMetadata';
import { type SynchronizationMetadataEntry } from './synchronizationMetadataEntry';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSynchronizationMetadataEntry(synchronizationMetadataEntry: SynchronizationMetadataEntry | undefined = {} as SynchronizationMetadataEntry) : Record<string, (node: ParseNode) => void> {
    return {
        "key": n => { synchronizationMetadataEntry.key = n.getEnumValue<SynchronizationMetadata>(SynchronizationMetadata); },
        "@odata.type": n => { synchronizationMetadataEntry.odataType = n.getStringValue(); },
        "value": n => { synchronizationMetadataEntry.value = n.getStringValue(); },
    }
}
