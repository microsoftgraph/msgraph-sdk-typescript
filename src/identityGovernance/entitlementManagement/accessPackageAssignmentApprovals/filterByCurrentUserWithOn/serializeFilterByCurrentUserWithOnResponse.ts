import {Approval} from '../../../../models/approval';
import {serializeApproval} from '../../../../models/serializeApproval';
import {serializeBaseCollectionPaginationCountResponse} from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import {FilterByCurrentUserWithOnResponse} from './filterByCurrentUserWithOnResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFilterByCurrentUserWithOnResponse(filterByCurrentUserWithOnResponse: FilterByCurrentUserWithOnResponse | undefined = {} as FilterByCurrentUserWithOnResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, filterByCurrentUserWithOnResponse)
        writer.writeCollectionOfObjectValues<Approval>("value", filterByCurrentUserWithOnResponse.value, serializeApproval);
}
