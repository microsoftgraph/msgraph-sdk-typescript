import { type AccessReviewHistoryInstance } from './accessReviewHistoryInstance';
import { type AccessReviewHistoryInstanceCollectionResponse } from './accessReviewHistoryInstanceCollectionResponse';
import { serializeAccessReviewHistoryInstance } from './serializeAccessReviewHistoryInstance';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAccessReviewHistoryInstanceCollectionResponse(writer: SerializationWriter, accessReviewHistoryInstanceCollectionResponse: AccessReviewHistoryInstanceCollectionResponse | undefined = {} as AccessReviewHistoryInstanceCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessReviewHistoryInstanceCollectionResponse)
        writer.writeCollectionOfObjectValues<AccessReviewHistoryInstance>("value", accessReviewHistoryInstanceCollectionResponse.value, serializeAccessReviewHistoryInstance);
}
