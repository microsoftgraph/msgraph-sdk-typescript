import {AttributeDefinitionMetadata} from './attributeDefinitionMetadata';
import {AttributeDefinitionMetadataEntry} from './attributeDefinitionMetadataEntry';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttributeDefinitionMetadataEntry(writer: SerializationWriter, attributeDefinitionMetadataEntry: AttributeDefinitionMetadataEntry | undefined = {} as AttributeDefinitionMetadataEntry) : void {
        writer.writeEnumValue<AttributeDefinitionMetadata>("key", attributeDefinitionMetadataEntry.key);
        writer.writeStringValue("@odata.type", attributeDefinitionMetadataEntry.odataType);
        writer.writeStringValue("value", attributeDefinitionMetadataEntry.value);
        writer.writeAdditionalData(attributeDefinitionMetadataEntry.additionalData);
}
