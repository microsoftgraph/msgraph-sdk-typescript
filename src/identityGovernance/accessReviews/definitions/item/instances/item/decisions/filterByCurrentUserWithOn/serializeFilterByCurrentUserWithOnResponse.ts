import type {AccessReviewInstanceDecisionItem} from '../../../../../../../../models/accessReviewInstanceDecisionItem';
import {serializeAccessReviewInstanceDecisionItem} from '../../../../../../../../models/serializeAccessReviewInstanceDecisionItem';
import {serializeBaseCollectionPaginationCountResponse} from '../../../../../../../../models/serializeBaseCollectionPaginationCountResponse';
import type {FilterByCurrentUserWithOnResponse} from './filterByCurrentUserWithOnResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFilterByCurrentUserWithOnResponse(writer: SerializationWriter, filterByCurrentUserWithOnResponse: FilterByCurrentUserWithOnResponse | undefined = {} as FilterByCurrentUserWithOnResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, filterByCurrentUserWithOnResponse)
        writer.writeCollectionOfObjectValues<AccessReviewInstanceDecisionItem>("value", filterByCurrentUserWithOnResponse.value, serializeAccessReviewInstanceDecisionItem);
}
