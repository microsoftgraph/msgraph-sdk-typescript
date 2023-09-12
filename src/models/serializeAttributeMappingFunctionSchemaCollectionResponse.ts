import { type AttributeMappingFunctionSchema } from './attributeMappingFunctionSchema';
import { type AttributeMappingFunctionSchemaCollectionResponse } from './attributeMappingFunctionSchemaCollectionResponse';
import { serializeAttributeMappingFunctionSchema } from './serializeAttributeMappingFunctionSchema';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAttributeMappingFunctionSchemaCollectionResponse(writer: SerializationWriter, attributeMappingFunctionSchemaCollectionResponse: AttributeMappingFunctionSchemaCollectionResponse | undefined = {} as AttributeMappingFunctionSchemaCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, attributeMappingFunctionSchemaCollectionResponse)
        writer.writeCollectionOfObjectValues<AttributeMappingFunctionSchema>("value", attributeMappingFunctionSchemaCollectionResponse.value, serializeAttributeMappingFunctionSchema);
}
