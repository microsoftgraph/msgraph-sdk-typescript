import {AttributeMappingParameterSchema} from './attributeMappingParameterSchema';
import {AttributeType} from './attributeType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttributeMappingParameterSchema(writer: SerializationWriter, attributeMappingParameterSchema: AttributeMappingParameterSchema | undefined = {} as AttributeMappingParameterSchema) : void {
        writer.writeBooleanValue("allowMultipleOccurrences", attributeMappingParameterSchema.allowMultipleOccurrences);
        writer.writeStringValue("name", attributeMappingParameterSchema.name);
        writer.writeStringValue("@odata.type", attributeMappingParameterSchema.odataType);
        writer.writeBooleanValue("required", attributeMappingParameterSchema.required);
        writer.writeEnumValue<AttributeType>("type", attributeMappingParameterSchema.type);
        writer.writeAdditionalData(attributeMappingParameterSchema.additionalData);
}
