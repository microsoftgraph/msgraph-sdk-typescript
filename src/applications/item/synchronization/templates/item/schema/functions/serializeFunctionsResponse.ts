import { type AttributeMappingFunctionSchema } from '../../../../../../../models/attributeMappingFunctionSchema';
import { serializeAttributeMappingFunctionSchema } from '../../../../../../../models/serializeAttributeMappingFunctionSchema';
import { serializeBaseCollectionPaginationCountResponse } from '../../../../../../../models/serializeBaseCollectionPaginationCountResponse';
import { type FunctionsResponse } from './functionsResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeFunctionsResponse(writer: SerializationWriter, functionsResponse: FunctionsResponse | undefined = {} as FunctionsResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, functionsResponse)
        writer.writeCollectionOfObjectValues<AttributeMappingFunctionSchema>("value", functionsResponse.value, serializeAttributeMappingFunctionSchema);
}
