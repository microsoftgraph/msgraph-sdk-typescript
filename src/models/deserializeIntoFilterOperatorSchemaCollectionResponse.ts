import { createFilterOperatorSchemaFromDiscriminatorValue } from './createFilterOperatorSchemaFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type FilterOperatorSchema } from './filterOperatorSchema';
import { type FilterOperatorSchemaCollectionResponse } from './filterOperatorSchemaCollectionResponse';
import { serializeFilterOperatorSchema } from './serializeFilterOperatorSchema';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoFilterOperatorSchemaCollectionResponse(filterOperatorSchemaCollectionResponse: FilterOperatorSchemaCollectionResponse | undefined = {} as FilterOperatorSchemaCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(filterOperatorSchemaCollectionResponse),
        "value": n => { filterOperatorSchemaCollectionResponse.value = n.getCollectionOfObjectValues<FilterOperatorSchema>(createFilterOperatorSchemaFromDiscriminatorValue); },
    }
}
