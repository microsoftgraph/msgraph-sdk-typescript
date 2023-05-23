import {AttributeMapping} from './attributeMapping';
import {Filter} from './filter';
import {ObjectFlowTypes} from './objectFlowTypes';
import {ObjectMapping} from './objectMapping';
import {ObjectMappingMetadataEntry} from './objectMappingMetadataEntry';
import {serializeAttributeMapping} from './serializeAttributeMapping';
import {serializeFilter} from './serializeFilter';
import {serializeObjectMappingMetadataEntry} from './serializeObjectMappingMetadataEntry';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeObjectMapping(writer: SerializationWriter, objectMapping: ObjectMapping | undefined = {} as ObjectMapping) : void {
        writer.writeCollectionOfObjectValues<AttributeMapping>("attributeMappings", objectMapping.attributeMappings, serializeAttributeMapping);
        writer.writeBooleanValue("enabled", objectMapping.enabled);
        writer.writeEnumValue<ObjectFlowTypes>("flowTypes", objectMapping.flowTypes);
        writer.writeCollectionOfObjectValues<ObjectMappingMetadataEntry>("metadata", objectMapping.metadata, serializeObjectMappingMetadataEntry);
        writer.writeStringValue("name", objectMapping.name);
        writer.writeStringValue("@odata.type", objectMapping.odataType);
        writer.writeObjectValue<Filter>("scope", objectMapping.scope, serializeFilter);
        writer.writeStringValue("sourceObjectName", objectMapping.sourceObjectName);
        writer.writeStringValue("targetObjectName", objectMapping.targetObjectName);
        writer.writeAdditionalData(objectMapping.additionalData);
}
