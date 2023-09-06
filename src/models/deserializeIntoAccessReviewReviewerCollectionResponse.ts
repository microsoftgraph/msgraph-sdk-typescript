import { type AccessReviewReviewer } from './accessReviewReviewer';
import { type AccessReviewReviewerCollectionResponse } from './accessReviewReviewerCollectionResponse';
import { createAccessReviewReviewerFromDiscriminatorValue } from './createAccessReviewReviewerFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeAccessReviewReviewer } from './serializeAccessReviewReviewer';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewReviewerCollectionResponse(accessReviewReviewerCollectionResponse: AccessReviewReviewerCollectionResponse | undefined = {} as AccessReviewReviewerCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(accessReviewReviewerCollectionResponse),
        "value": n => { accessReviewReviewerCollectionResponse.value = n.getCollectionOfObjectValues<AccessReviewReviewer>(createAccessReviewReviewerFromDiscriminatorValue); },
    }
}
