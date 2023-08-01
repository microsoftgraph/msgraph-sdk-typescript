import type {AccessReviewInstanceDecisionItem} from './accessReviewInstanceDecisionItem';
import type {AccessReviewInstanceDecisionItemCollectionResponse} from './accessReviewInstanceDecisionItemCollectionResponse';
import {serializeAccessReviewInstanceDecisionItem} from './serializeAccessReviewInstanceDecisionItem';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewInstanceDecisionItemCollectionResponse(writer: SerializationWriter, accessReviewInstanceDecisionItemCollectionResponse: AccessReviewInstanceDecisionItemCollectionResponse | undefined = {} as AccessReviewInstanceDecisionItemCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessReviewInstanceDecisionItemCollectionResponse)
        writer.writeCollectionOfObjectValues<AccessReviewInstanceDecisionItem>("value", accessReviewInstanceDecisionItemCollectionResponse.value, serializeAccessReviewInstanceDecisionItem);
}
