import {FilterOperatorSchema} from '../../../../../../../models/filterOperatorSchema';
import {serializeBaseCollectionPaginationCountResponse} from '../../../../../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeFilterOperatorSchema} from '../../../../../../../models/serializeFilterOperatorSchema';
import {FilterOperatorsResponse} from './filterOperatorsResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFilterOperatorsResponse(filterOperatorsResponse: FilterOperatorsResponse | undefined = {} as FilterOperatorsResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, filterOperatorsResponse)
        writer.writeCollectionOfObjectValues<FilterOperatorSchema>("value", filterOperatorsResponse.value, serializeFilterOperatorSchema);
}
