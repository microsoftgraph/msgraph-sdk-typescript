import {deserializeIntoObjectMappingMetadataEntry} from './deserializeIntoObjectMappingMetadataEntry';
import {ObjectMappingMetadataEntry} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createObjectMappingMetadataEntryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoObjectMappingMetadataEntry;
}
