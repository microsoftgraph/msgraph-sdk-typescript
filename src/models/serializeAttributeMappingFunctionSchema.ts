import type {AttributeMappingFunctionSchema} from './attributeMappingFunctionSchema';
import type {AttributeMappingParameterSchema} from './attributeMappingParameterSchema';
import {serializeAttributeMappingParameterSchema} from './serializeAttributeMappingParameterSchema';
import {serializeEntity} from './serializeEntity';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttributeMappingFunctionSchema(writer: SerializationWriter, attributeMappingFunctionSchema: AttributeMappingFunctionSchema | undefined = {} as AttributeMappingFunctionSchema) : void {
        serializeEntity(writer, attributeMappingFunctionSchema)
        writer.writeCollectionOfObjectValues<AttributeMappingParameterSchema>("parameters", attributeMappingFunctionSchema.parameters, serializeAttributeMappingParameterSchema);
}
