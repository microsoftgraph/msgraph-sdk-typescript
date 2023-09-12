import { type AccessReviewInstance } from './accessReviewInstance';
import { type AccessReviewInstanceCollectionResponse } from './accessReviewInstanceCollectionResponse';
import { serializeAccessReviewInstance } from './serializeAccessReviewInstance';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAccessReviewInstanceCollectionResponse(writer: SerializationWriter, accessReviewInstanceCollectionResponse: AccessReviewInstanceCollectionResponse | undefined = {} as AccessReviewInstanceCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessReviewInstanceCollectionResponse)
        writer.writeCollectionOfObjectValues<AccessReviewInstance>("value", accessReviewInstanceCollectionResponse.value, serializeAccessReviewInstance);
}
