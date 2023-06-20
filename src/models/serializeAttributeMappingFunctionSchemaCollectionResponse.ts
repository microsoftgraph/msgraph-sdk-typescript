import {AttributeMappingFunctionSchema} from './attributeMappingFunctionSchema';
import {AttributeMappingFunctionSchemaCollectionResponse} from './attributeMappingFunctionSchemaCollectionResponse';
import {serializeAttributeMappingFunctionSchema} from './serializeAttributeMappingFunctionSchema';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttributeMappingFunctionSchemaCollectionResponse(attributeMappingFunctionSchemaCollectionResponse: AttributeMappingFunctionSchemaCollectionResponse | undefined = {} as AttributeMappingFunctionSchemaCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, attributeMappingFunctionSchemaCollectionResponse)
        writer.writeCollectionOfObjectValues<AttributeMappingFunctionSchema>("value", attributeMappingFunctionSchemaCollectionResponse.value, serializeAttributeMappingFunctionSchema);
}
