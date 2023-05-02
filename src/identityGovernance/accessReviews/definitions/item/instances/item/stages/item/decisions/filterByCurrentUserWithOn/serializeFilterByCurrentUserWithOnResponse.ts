import {AccessReviewInstanceDecisionItem} from '../../../../../../../../../../models/accessReviewInstanceDecisionItem';
import {serializeAccessReviewInstanceDecisionItem} from '../../../../../../../../../../models/serializeAccessReviewInstanceDecisionItem';
import {serializeBaseCollectionPaginationCountResponse} from '../../../../../../../../../../models/serializeBaseCollectionPaginationCountResponse';
import {FilterByCurrentUserWithOnResponse} from './filterByCurrentUserWithOnResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFilterByCurrentUserWithOnResponse(writer: SerializationWriter, filterByCurrentUserWithOnResponse: FilterByCurrentUserWithOnResponse | undefined = {} as FilterByCurrentUserWithOnResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, filterByCurrentUserWithOnResponse)
        writer.writeCollectionOfObjectValues<AccessReviewInstanceDecisionItem>("value", filterByCurrentUserWithOnResponse.value, serializeAccessReviewInstanceDecisionItem);
}
