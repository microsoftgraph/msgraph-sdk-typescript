import { deserializeIntoSynchronizationMetadataEntry } from './deserializeIntoSynchronizationMetadataEntry';
import { type SynchronizationMetadataEntry } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSynchronizationMetadataEntryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSynchronizationMetadataEntry;
}
