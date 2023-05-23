import {createFilterOperatorSchemaFromDiscriminatorValue} from './createFilterOperatorSchemaFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {FilterOperatorSchema} from './filterOperatorSchema';
import {FilterOperatorSchemaCollectionResponse} from './filterOperatorSchemaCollectionResponse';
import {serializeFilterOperatorSchema} from './serializeFilterOperatorSchema';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFilterOperatorSchemaCollectionResponse(filterOperatorSchemaCollectionResponse: FilterOperatorSchemaCollectionResponse | undefined = {} as FilterOperatorSchemaCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(filterOperatorSchemaCollectionResponse),
        "value": n => { filterOperatorSchemaCollectionResponse.value = n.getCollectionOfObjectValues<FilterOperatorSchema>(createFilterOperatorSchemaFromDiscriminatorValue); },
    }
}
