import {AccessReviewInstance} from '../../../../../../models/accessReviewInstance';
import {serializeAccessReviewInstance} from '../../../../../../models/serializeAccessReviewInstance';
import {serializeBaseCollectionPaginationCountResponse} from '../../../../../../models/serializeBaseCollectionPaginationCountResponse';
import {FilterByCurrentUserWithOnResponse} from './filterByCurrentUserWithOnResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFilterByCurrentUserWithOnResponse(filterByCurrentUserWithOnResponse: FilterByCurrentUserWithOnResponse | undefined = {} as FilterByCurrentUserWithOnResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, filterByCurrentUserWithOnResponse)
        writer.writeCollectionOfObjectValues<AccessReviewInstance>("value", filterByCurrentUserWithOnResponse.value, serializeAccessReviewInstance);
}
