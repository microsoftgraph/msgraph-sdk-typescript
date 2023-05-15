import {AccessReviewInstance} from './accessReviewInstance';
import {AccessReviewInstanceCollectionResponse} from './accessReviewInstanceCollectionResponse';
import {serializeAccessReviewInstance} from './serializeAccessReviewInstance';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewInstanceCollectionResponse(writer: SerializationWriter, accessReviewInstanceCollectionResponse: AccessReviewInstanceCollectionResponse | undefined = {} as AccessReviewInstanceCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessReviewInstanceCollectionResponse)
        writer.writeCollectionOfObjectValues<AccessReviewInstance>("value", accessReviewInstanceCollectionResponse.value, serializeAccessReviewInstance);
}
