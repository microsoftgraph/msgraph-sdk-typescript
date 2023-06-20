import {AttributeMappingFunctionSchema} from './attributeMappingFunctionSchema';
import {AttributeMappingParameterSchema} from './attributeMappingParameterSchema';
import {serializeAttributeMappingParameterSchema} from './serializeAttributeMappingParameterSchema';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttributeMappingFunctionSchema(attributeMappingFunctionSchema: AttributeMappingFunctionSchema | undefined = {} as AttributeMappingFunctionSchema, writer: SerializationWriter) : void {
        serializeEntity(writer, attributeMappingFunctionSchema)
        writer.writeCollectionOfObjectValues<AttributeMappingParameterSchema>("parameters", attributeMappingFunctionSchema.parameters, serializeAttributeMappingParameterSchema);
}
