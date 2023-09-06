import { type FilterOperatorSchema } from './filterOperatorSchema';
import { type FilterOperatorSchemaCollectionResponse } from './filterOperatorSchemaCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeFilterOperatorSchema } from './serializeFilterOperatorSchema';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeFilterOperatorSchemaCollectionResponse(writer: SerializationWriter, filterOperatorSchemaCollectionResponse: FilterOperatorSchemaCollectionResponse | undefined = {} as FilterOperatorSchemaCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, filterOperatorSchemaCollectionResponse)
        writer.writeCollectionOfObjectValues<FilterOperatorSchema>("value", filterOperatorSchemaCollectionResponse.value, serializeFilterOperatorSchema);
}
