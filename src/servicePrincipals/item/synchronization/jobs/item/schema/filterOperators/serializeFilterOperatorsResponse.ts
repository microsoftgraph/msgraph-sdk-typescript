import { type FilterOperatorSchema } from '../../../../../../../models/filterOperatorSchema';
import { serializeBaseCollectionPaginationCountResponse } from '../../../../../../../models/serializeBaseCollectionPaginationCountResponse';
import { serializeFilterOperatorSchema } from '../../../../../../../models/serializeFilterOperatorSchema';
import { type FilterOperatorsResponse } from './filterOperatorsResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeFilterOperatorsResponse(writer: SerializationWriter, filterOperatorsResponse: FilterOperatorsResponse | undefined = {} as FilterOperatorsResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, filterOperatorsResponse)
        writer.writeCollectionOfObjectValues<FilterOperatorSchema>("value", filterOperatorsResponse.value, serializeFilterOperatorSchema);
}
