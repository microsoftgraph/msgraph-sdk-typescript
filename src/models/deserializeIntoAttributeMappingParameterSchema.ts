import { type AttributeMappingParameterSchema } from './attributeMappingParameterSchema';
import { AttributeType } from './attributeType';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAttributeMappingParameterSchema(attributeMappingParameterSchema: AttributeMappingParameterSchema | undefined = {} as AttributeMappingParameterSchema) : Record<string, (node: ParseNode) => void> {
    return {
        "allowMultipleOccurrences": n => { attributeMappingParameterSchema.allowMultipleOccurrences = n.getBooleanValue(); },
        "name": n => { attributeMappingParameterSchema.name = n.getStringValue(); },
        "@odata.type": n => { attributeMappingParameterSchema.odataType = n.getStringValue(); },
        "required": n => { attributeMappingParameterSchema.required = n.getBooleanValue(); },
        "type": n => { attributeMappingParameterSchema.type = n.getEnumValue<AttributeType>(AttributeType); },
    }
}
