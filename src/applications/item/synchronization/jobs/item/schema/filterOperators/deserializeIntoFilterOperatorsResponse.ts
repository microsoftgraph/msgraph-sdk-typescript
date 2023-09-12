import { createFilterOperatorSchemaFromDiscriminatorValue } from '../../../../../../../models/createFilterOperatorSchemaFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from '../../../../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import { type FilterOperatorSchema } from '../../../../../../../models/filterOperatorSchema';
import { serializeFilterOperatorSchema } from '../../../../../../../models/serializeFilterOperatorSchema';
import { type FilterOperatorsResponse } from './filterOperatorsResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoFilterOperatorsResponse(filterOperatorsResponse: FilterOperatorsResponse | undefined = {} as FilterOperatorsResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(filterOperatorsResponse),
        "value": n => { filterOperatorsResponse.value = n.getCollectionOfObjectValues<FilterOperatorSchema>(createFilterOperatorSchemaFromDiscriminatorValue); },
    }
}
