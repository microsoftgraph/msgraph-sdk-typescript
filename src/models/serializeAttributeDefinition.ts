import {AttributeDefinition} from './attributeDefinition';
import {AttributeDefinitionMetadataEntry} from './attributeDefinitionMetadataEntry';
import {AttributeType} from './attributeType';
import {Mutability} from './mutability';
import {ReferencedObject} from './referencedObject';
import {serializeAttributeDefinitionMetadataEntry} from './serializeAttributeDefinitionMetadataEntry';
import {serializeReferencedObject} from './serializeReferencedObject';
import {serializeStringKeyStringValuePair} from './serializeStringKeyStringValuePair';
import {StringKeyStringValuePair} from './stringKeyStringValuePair';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

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
