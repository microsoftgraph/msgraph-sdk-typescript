import {AccessReviewHistoryInstance} from './accessReviewHistoryInstance';
import {AccessReviewHistoryInstanceCollectionResponse} from './accessReviewHistoryInstanceCollectionResponse';
import {serializeAccessReviewHistoryInstance} from './serializeAccessReviewHistoryInstance';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewHistoryInstanceCollectionResponse(accessReviewHistoryInstanceCollectionResponse: AccessReviewHistoryInstanceCollectionResponse | undefined = {} as AccessReviewHistoryInstanceCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessReviewHistoryInstanceCollectionResponse)
        writer.writeCollectionOfObjectValues<AccessReviewHistoryInstance>("value", accessReviewHistoryInstanceCollectionResponse.value, serializeAccessReviewHistoryInstance);
}
