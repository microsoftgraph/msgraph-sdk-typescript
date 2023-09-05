import { type AccessReviewInstance } from '../../../../../../models/accessReviewInstance';
import { serializeAccessReviewInstance } from '../../../../../../models/serializeAccessReviewInstance';
import { serializeBaseCollectionPaginationCountResponse } from '../../../../../../models/serializeBaseCollectionPaginationCountResponse';
import { type FilterByCurrentUserWithOnResponse } from './filterByCurrentUserWithOnResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeFilterByCurrentUserWithOnResponse(writer: SerializationWriter, filterByCurrentUserWithOnResponse: FilterByCurrentUserWithOnResponse | undefined = {} as FilterByCurrentUserWithOnResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, filterByCurrentUserWithOnResponse)
        writer.writeCollectionOfObjectValues<AccessReviewInstance>("value", filterByCurrentUserWithOnResponse.value, serializeAccessReviewInstance);
}
