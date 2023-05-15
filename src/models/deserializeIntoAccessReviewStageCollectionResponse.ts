import {AccessReviewStage} from './accessReviewStage';
import {AccessReviewStageCollectionResponse} from './accessReviewStageCollectionResponse';
import {createAccessReviewStageFromDiscriminatorValue} from './createAccessReviewStageFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeAccessReviewStage} from './serializeAccessReviewStage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewStageCollectionResponse(accessReviewStageCollectionResponse: AccessReviewStageCollectionResponse | undefined = {} as AccessReviewStageCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(accessReviewStageCollectionResponse),
        "value": n => { accessReviewStageCollectionResponse.value = n.getCollectionOfObjectValues<AccessReviewStage>(createAccessReviewStageFromDiscriminatorValue); },
    }
}
