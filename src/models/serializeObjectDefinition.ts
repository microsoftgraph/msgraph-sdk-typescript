import {AttributeDefinition} from './attributeDefinition';
import {ObjectDefinition} from './objectDefinition';
import {ObjectDefinitionMetadataEntry} from './objectDefinitionMetadataEntry';
import {serializeAttributeDefinition} from './serializeAttributeDefinition';
import {serializeObjectDefinitionMetadataEntry} from './serializeObjectDefinitionMetadataEntry';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeObjectDefinition(writer: SerializationWriter, objectDefinition: ObjectDefinition | undefined = {} as ObjectDefinition) : void {
        writer.writeCollectionOfObjectValues<AttributeDefinition>("attributes", objectDefinition.attributes, serializeAttributeDefinition);
        writer.writeCollectionOfObjectValues<ObjectDefinitionMetadataEntry>("metadata", objectDefinition.metadata, serializeObjectDefinitionMetadataEntry);
        writer.writeStringValue("name", objectDefinition.name);
        writer.writeStringValue("@odata.type", objectDefinition.odataType);
        writer.writeCollectionOfPrimitiveValues<string>("supportedApis", objectDefinition.supportedApis);
        writer.writeAdditionalData(objectDefinition.additionalData);
}
