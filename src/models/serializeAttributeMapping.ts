import {AttributeFlowBehavior} from './attributeFlowBehavior';
import {AttributeFlowType} from './attributeFlowType';
import {AttributeMapping} from './attributeMapping';
import {AttributeMappingSource} from './attributeMappingSource';
import {serializeAttributeMappingSource} from './serializeAttributeMappingSource';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttributeMapping(writer: SerializationWriter, attributeMapping: AttributeMapping | undefined = {} as AttributeMapping) : void {
        writer.writeStringValue("defaultValue", attributeMapping.defaultValue);
        writer.writeBooleanValue("exportMissingReferences", attributeMapping.exportMissingReferences);
        writer.writeEnumValue<AttributeFlowBehavior>("flowBehavior", attributeMapping.flowBehavior);
        writer.writeEnumValue<AttributeFlowType>("flowType", attributeMapping.flowType);
        writer.writeNumberValue("matchingPriority", attributeMapping.matchingPriority);
        writer.writeStringValue("@odata.type", attributeMapping.odataType);
        writer.writeObjectValue<AttributeMappingSource>("source", attributeMapping.source, serializeAttributeMappingSource);
        writer.writeStringValue("targetAttributeName", attributeMapping.targetAttributeName);
        writer.writeAdditionalData(attributeMapping.additionalData);
}
