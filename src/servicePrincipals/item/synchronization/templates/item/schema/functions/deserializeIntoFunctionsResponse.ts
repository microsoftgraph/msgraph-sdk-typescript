import { type AttributeMappingFunctionSchema } from '../../../../../../../models/attributeMappingFunctionSchema';
import { createAttributeMappingFunctionSchemaFromDiscriminatorValue } from '../../../../../../../models/createAttributeMappingFunctionSchemaFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from '../../../../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeAttributeMappingFunctionSchema } from '../../../../../../../models/serializeAttributeMappingFunctionSchema';
import { type FunctionsResponse } from './functionsResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoFunctionsResponse(functionsResponse: FunctionsResponse | undefined = {} as FunctionsResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(functionsResponse),
        "value": n => { functionsResponse.value = n.getCollectionOfObjectValues<AttributeMappingFunctionSchema>(createAttributeMappingFunctionSchemaFromDiscriminatorValue); },
    }
}
