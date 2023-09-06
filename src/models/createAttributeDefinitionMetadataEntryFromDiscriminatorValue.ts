import { deserializeIntoAttributeDefinitionMetadataEntry } from './deserializeIntoAttributeDefinitionMetadataEntry';
import { type AttributeDefinitionMetadataEntry } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAttributeDefinitionMetadataEntryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAttributeDefinitionMetadataEntry;
}
