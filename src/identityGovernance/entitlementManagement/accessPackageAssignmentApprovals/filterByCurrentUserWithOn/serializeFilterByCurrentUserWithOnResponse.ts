import type {Approval} from '../../../../models/approval';
import {serializeApproval} from '../../../../models/serializeApproval';
import {serializeBaseCollectionPaginationCountResponse} from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import type {FilterByCurrentUserWithOnResponse} from './filterByCurrentUserWithOnResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFilterByCurrentUserWithOnResponse(writer: SerializationWriter, filterByCurrentUserWithOnResponse: FilterByCurrentUserWithOnResponse | undefined = {} as FilterByCurrentUserWithOnResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, filterByCurrentUserWithOnResponse)
        writer.writeCollectionOfObjectValues<Approval>("value", filterByCurrentUserWithOnResponse.value, serializeApproval);
}
