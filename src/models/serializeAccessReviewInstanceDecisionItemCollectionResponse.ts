import {AccessReviewInstanceDecisionItem} from './accessReviewInstanceDecisionItem';
import {AccessReviewInstanceDecisionItemCollectionResponse} from './accessReviewInstanceDecisionItemCollectionResponse';
import {serializeAccessReviewInstanceDecisionItem} from './serializeAccessReviewInstanceDecisionItem';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewInstanceDecisionItemCollectionResponse(accessReviewInstanceDecisionItemCollectionResponse: AccessReviewInstanceDecisionItemCollectionResponse | undefined = {} as AccessReviewInstanceDecisionItemCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessReviewInstanceDecisionItemCollectionResponse)
        writer.writeCollectionOfObjectValues<AccessReviewInstanceDecisionItem>("value", accessReviewInstanceDecisionItemCollectionResponse.value, serializeAccessReviewInstanceDecisionItem);
}
