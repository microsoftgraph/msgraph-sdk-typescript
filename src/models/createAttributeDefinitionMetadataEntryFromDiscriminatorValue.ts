import {deserializeIntoAttributeDefinitionMetadataEntry} from './deserializeIntoAttributeDefinitionMetadataEntry';
import {AttributeDefinitionMetadataEntry} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttributeDefinitionMetadataEntryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAttributeDefinitionMetadataEntry;
}
