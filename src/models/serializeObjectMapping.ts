import { type AttributeMapping } from './attributeMapping';
import { type Filter } from './filter';
import { ObjectFlowTypes } from './objectFlowTypes';
import { type ObjectMapping } from './objectMapping';
import { type ObjectMappingMetadataEntry } from './objectMappingMetadataEntry';
import { serializeAttributeMapping } from './serializeAttributeMapping';
import { serializeFilter } from './serializeFilter';
import { serializeObjectMappingMetadataEntry } from './serializeObjectMappingMetadataEntry';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeObjectMapping(writer: SerializationWriter, objectMapping: ObjectMapping | undefined = {} as ObjectMapping) : void {
        writer.writeCollectionOfObjectValues<AttributeMapping>("attributeMappings", objectMapping.attributeMappings, serializeAttributeMapping);
        writer.writeBooleanValue("enabled", objectMapping.enabled);
        writer.writeEnumValue<ObjectFlowTypes[]>("flowTypes", objectMapping.flowTypes);
        writer.writeCollectionOfObjectValues<ObjectMappingMetadataEntry>("metadata", objectMapping.metadata, serializeObjectMappingMetadataEntry);
        writer.writeStringValue("name", objectMapping.name);
        writer.writeStringValue("@odata.type", objectMapping.odataType);
        writer.writeObjectValue<Filter>("scope", objectMapping.scope, serializeFilter);
        writer.writeStringValue("sourceObjectName", objectMapping.sourceObjectName);
        writer.writeStringValue("targetObjectName", objectMapping.targetObjectName);
        writer.writeAdditionalData(objectMapping.additionalData);
}
