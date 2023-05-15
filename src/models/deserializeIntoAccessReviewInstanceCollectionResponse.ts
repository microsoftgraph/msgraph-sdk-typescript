import {AccessReviewInstance} from './accessReviewInstance';
import {AccessReviewInstanceCollectionResponse} from './accessReviewInstanceCollectionResponse';
import {createAccessReviewInstanceFromDiscriminatorValue} from './createAccessReviewInstanceFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeAccessReviewInstance} from './serializeAccessReviewInstance';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewInstanceCollectionResponse(accessReviewInstanceCollectionResponse: AccessReviewInstanceCollectionResponse | undefined = {} as AccessReviewInstanceCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(accessReviewInstanceCollectionResponse),
        "value": n => { accessReviewInstanceCollectionResponse.value = n.getCollectionOfObjectValues<AccessReviewInstance>(createAccessReviewInstanceFromDiscriminatorValue); },
    }
}
