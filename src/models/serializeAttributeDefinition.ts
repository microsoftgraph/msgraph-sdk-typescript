import { type AttributeDefinition } from './attributeDefinition';
import { type AttributeDefinitionMetadataEntry } from './attributeDefinitionMetadataEntry';
import { AttributeType } from './attributeType';
import { Mutability } from './mutability';
import { type ReferencedObject } from './referencedObject';
import { serializeAttributeDefinitionMetadataEntry } from './serializeAttributeDefinitionMetadataEntry';
import { serializeReferencedObject } from './serializeReferencedObject';
import { serializeStringKeyStringValuePair } from './serializeStringKeyStringValuePair';
import { type StringKeyStringValuePair } from './stringKeyStringValuePair';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAttributeDefinition(writer: SerializationWriter, attributeDefinition: AttributeDefinition | undefined = {} as AttributeDefinition) : void {
        writer.writeBooleanValue("anchor", attributeDefinition.anchor);
        writer.writeCollectionOfObjectValues<StringKeyStringValuePair>("apiExpressions", attributeDefinition.apiExpressions, serializeStringKeyStringValuePair);
        writer.writeBooleanValue("caseExact", attributeDefinition.caseExact);
        writer.writeStringValue("defaultValue", attributeDefinition.defaultValue);
        writer.writeBooleanValue("flowNullValues", attributeDefinition.flowNullValues);
        writer.writeCollectionOfObjectValues<AttributeDefinitionMetadataEntry>("metadata", attributeDefinition.metadata, serializeAttributeDefinitionMetadataEntry);
        writer.writeBooleanValue("multivalued", attributeDefinition.multivalued);
        writer.writeEnumValue<Mutability>("mutability", attributeDefinition.mutability);
        writer.writeStringValue("name", attributeDefinition.name);
        writer.writeStringValue("@odata.type", attributeDefinition.odataType);
        writer.writeCollectionOfObjectValues<ReferencedObject>("referencedObjects", attributeDefinition.referencedObjects, serializeReferencedObject);
        writer.writeBooleanValue("required", attributeDefinition.required);
        writer.writeEnumValue<AttributeType>("type", attributeDefinition.type);
        writer.writeAdditionalData(attributeDefinition.additionalData);
}
