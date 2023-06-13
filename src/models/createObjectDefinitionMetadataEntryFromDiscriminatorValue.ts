import {deserializeIntoObjectDefinitionMetadataEntry} from './deserializeIntoObjectDefinitionMetadataEntry';
import {ObjectDefinitionMetadataEntry} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createObjectDefinitionMetadataEntryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoObjectDefinitionMetadataEntry;
}
