import { deserializeIntoObjectMappingMetadataEntry } from './deserializeIntoObjectMappingMetadataEntry';
import { type ObjectMappingMetadataEntry } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createObjectMappingMetadataEntryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoObjectMappingMetadataEntry;
}
