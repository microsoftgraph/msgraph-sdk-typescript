import {deserializeIntoSynchronizationMetadataEntry} from './deserializeIntoSynchronizationMetadataEntry';
import {SynchronizationMetadataEntry} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSynchronizationMetadataEntryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSynchronizationMetadataEntry;
}
