import { AttributeDefinitionMetadata } from './attributeDefinitionMetadata';
import { type AttributeDefinitionMetadataEntry } from './attributeDefinitionMetadataEntry';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAttributeDefinitionMetadataEntry(writer: SerializationWriter, attributeDefinitionMetadataEntry: AttributeDefinitionMetadataEntry | undefined = {} as AttributeDefinitionMetadataEntry) : void {
        writer.writeEnumValue<AttributeDefinitionMetadata>("key", attributeDefinitionMetadataEntry.key);
        writer.writeStringValue("@odata.type", attributeDefinitionMetadataEntry.odataType);
        writer.writeStringValue("value", attributeDefinitionMetadataEntry.value);
        writer.writeAdditionalData(attributeDefinitionMetadataEntry.additionalData);
}
