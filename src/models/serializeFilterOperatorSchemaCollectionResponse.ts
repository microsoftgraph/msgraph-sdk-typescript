import {FilterOperatorSchema} from './filterOperatorSchema';
import {FilterOperatorSchemaCollectionResponse} from './filterOperatorSchemaCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeFilterOperatorSchema} from './serializeFilterOperatorSchema';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFilterOperatorSchemaCollectionResponse(filterOperatorSchemaCollectionResponse: FilterOperatorSchemaCollectionResponse | undefined = {} as FilterOperatorSchemaCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, filterOperatorSchemaCollectionResponse)
        writer.writeCollectionOfObjectValues<FilterOperatorSchema>("value", filterOperatorSchemaCollectionResponse.value, serializeFilterOperatorSchema);
}
