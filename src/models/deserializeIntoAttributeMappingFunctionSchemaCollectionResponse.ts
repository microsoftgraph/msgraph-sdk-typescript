import {AttributeMappingFunctionSchema} from './attributeMappingFunctionSchema';
import {AttributeMappingFunctionSchemaCollectionResponse} from './attributeMappingFunctionSchemaCollectionResponse';
import {createAttributeMappingFunctionSchemaFromDiscriminatorValue} from './createAttributeMappingFunctionSchemaFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeAttributeMappingFunctionSchema} from './serializeAttributeMappingFunctionSchema';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttributeMappingFunctionSchemaCollectionResponse(attributeMappingFunctionSchemaCollectionResponse: AttributeMappingFunctionSchemaCollectionResponse | undefined = {} as AttributeMappingFunctionSchemaCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(attributeMappingFunctionSchemaCollectionResponse),
        "value": n => { attributeMappingFunctionSchemaCollectionResponse.value = n.getCollectionOfObjectValues<AttributeMappingFunctionSchema>(createAttributeMappingFunctionSchemaFromDiscriminatorValue); },
    }
}
