import type {AccessReviewInstanceDecisionItem} from '../../../../../../../../../../models/accessReviewInstanceDecisionItem';
import {createAccessReviewInstanceDecisionItemFromDiscriminatorValue} from '../../../../../../../../../../models/createAccessReviewInstanceDecisionItemFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../../../../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeAccessReviewInstanceDecisionItem} from '../../../../../../../../../../models/serializeAccessReviewInstanceDecisionItem';
import type {FilterByCurrentUserWithOnResponse} from './filterByCurrentUserWithOnResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFilterByCurrentUserWithOnResponse(filterByCurrentUserWithOnResponse: FilterByCurrentUserWithOnResponse | undefined = {} as FilterByCurrentUserWithOnResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(filterByCurrentUserWithOnResponse),
        "value": n => { filterByCurrentUserWithOnResponse.value = n.getCollectionOfObjectValues<AccessReviewInstanceDecisionItem>(createAccessReviewInstanceDecisionItemFromDiscriminatorValue); },
    }
}
