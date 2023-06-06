import {AttributeMappingFunctionSchema} from './attributeMappingFunctionSchema';
import {AttributeMappingParameterSchema} from './attributeMappingParameterSchema';
import {createAttributeMappingParameterSchemaFromDiscriminatorValue} from './createAttributeMappingParameterSchemaFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeAttributeMappingParameterSchema} from './serializeAttributeMappingParameterSchema';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttributeMappingFunctionSchema(attributeMappingFunctionSchema: AttributeMappingFunctionSchema | undefined = {} as AttributeMappingFunctionSchema) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(attributeMappingFunctionSchema),
        "parameters": n => { attributeMappingFunctionSchema.parameters = n.getCollectionOfObjectValues<AttributeMappingParameterSchema>(createAttributeMappingParameterSchemaFromDiscriminatorValue); },
    }
}
