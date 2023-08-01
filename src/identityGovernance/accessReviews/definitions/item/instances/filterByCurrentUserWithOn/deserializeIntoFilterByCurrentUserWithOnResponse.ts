import type {AccessReviewInstance} from '../../../../../../models/accessReviewInstance';
import {createAccessReviewInstanceFromDiscriminatorValue} from '../../../../../../models/createAccessReviewInstanceFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeAccessReviewInstance} from '../../../../../../models/serializeAccessReviewInstance';
import type {FilterByCurrentUserWithOnResponse} from './filterByCurrentUserWithOnResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFilterByCurrentUserWithOnResponse(filterByCurrentUserWithOnResponse: FilterByCurrentUserWithOnResponse | undefined = {} as FilterByCurrentUserWithOnResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(filterByCurrentUserWithOnResponse),
        "value": n => { filterByCurrentUserWithOnResponse.value = n.getCollectionOfObjectValues<AccessReviewInstance>(createAccessReviewInstanceFromDiscriminatorValue); },
    }
}
