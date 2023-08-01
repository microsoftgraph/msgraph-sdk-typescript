import type {AccessReviewReviewer} from './accessReviewReviewer';
import type {AccessReviewReviewerCollectionResponse} from './accessReviewReviewerCollectionResponse';
import {serializeAccessReviewReviewer} from './serializeAccessReviewReviewer';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewReviewerCollectionResponse(writer: SerializationWriter, accessReviewReviewerCollectionResponse: AccessReviewReviewerCollectionResponse | undefined = {} as AccessReviewReviewerCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessReviewReviewerCollectionResponse)
        writer.writeCollectionOfObjectValues<AccessReviewReviewer>("value", accessReviewReviewerCollectionResponse.value, serializeAccessReviewReviewer);
}
