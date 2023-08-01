import type {AccessReviewHistoryInstance} from './accessReviewHistoryInstance';
import type {AccessReviewHistoryInstanceCollectionResponse} from './accessReviewHistoryInstanceCollectionResponse';
import {createAccessReviewHistoryInstanceFromDiscriminatorValue} from './createAccessReviewHistoryInstanceFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeAccessReviewHistoryInstance} from './serializeAccessReviewHistoryInstance';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewHistoryInstanceCollectionResponse(accessReviewHistoryInstanceCollectionResponse: AccessReviewHistoryInstanceCollectionResponse | undefined = {} as AccessReviewHistoryInstanceCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(accessReviewHistoryInstanceCollectionResponse),
        "value": n => { accessReviewHistoryInstanceCollectionResponse.value = n.getCollectionOfObjectValues<AccessReviewHistoryInstance>(createAccessReviewHistoryInstanceFromDiscriminatorValue); },
    }
}
