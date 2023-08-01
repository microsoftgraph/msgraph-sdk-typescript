import type {AccessReviewStage} from '../../../../../../../../models/accessReviewStage';
import {createAccessReviewStageFromDiscriminatorValue} from '../../../../../../../../models/createAccessReviewStageFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeAccessReviewStage} from '../../../../../../../../models/serializeAccessReviewStage';
import type {FilterByCurrentUserWithOnResponse} from './filterByCurrentUserWithOnResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFilterByCurrentUserWithOnResponse(filterByCurrentUserWithOnResponse: FilterByCurrentUserWithOnResponse | undefined = {} as FilterByCurrentUserWithOnResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(filterByCurrentUserWithOnResponse),
        "value": n => { filterByCurrentUserWithOnResponse.value = n.getCollectionOfObjectValues<AccessReviewStage>(createAccessReviewStageFromDiscriminatorValue); },
    }
}
