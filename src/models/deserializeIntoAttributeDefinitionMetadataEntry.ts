import { AttributeDefinitionMetadata } from './attributeDefinitionMetadata';
import { type AttributeDefinitionMetadataEntry } from './attributeDefinitionMetadataEntry';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAttributeDefinitionMetadataEntry(attributeDefinitionMetadataEntry: AttributeDefinitionMetadataEntry | undefined = {} as AttributeDefinitionMetadataEntry) : Record<string, (node: ParseNode) => void> {
    return {
        "key": n => { attributeDefinitionMetadataEntry.key = n.getEnumValue<AttributeDefinitionMetadata>(AttributeDefinitionMetadata); },
        "@odata.type": n => { attributeDefinitionMetadataEntry.odataType = n.getStringValue(); },
        "value": n => { attributeDefinitionMetadataEntry.value = n.getStringValue(); },
    }
}
