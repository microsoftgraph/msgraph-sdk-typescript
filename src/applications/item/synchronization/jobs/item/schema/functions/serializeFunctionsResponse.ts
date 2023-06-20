import {AttributeMappingFunctionSchema} from '../../../../../../../models/attributeMappingFunctionSchema';
import {serializeAttributeMappingFunctionSchema} from '../../../../../../../models/serializeAttributeMappingFunctionSchema';
import {serializeBaseCollectionPaginationCountResponse} from '../../../../../../../models/serializeBaseCollectionPaginationCountResponse';
import {FunctionsResponse} from './functionsResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFunctionsResponse(functionsResponse: FunctionsResponse | undefined = {} as FunctionsResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, functionsResponse)
        writer.writeCollectionOfObjectValues<AttributeMappingFunctionSchema>("value", functionsResponse.value, serializeAttributeMappingFunctionSchema);
}
