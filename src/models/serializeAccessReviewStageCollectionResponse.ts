import { type AccessReviewStage } from './accessReviewStage';
import { type AccessReviewStageCollectionResponse } from './accessReviewStageCollectionResponse';
import { serializeAccessReviewStage } from './serializeAccessReviewStage';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAccessReviewStageCollectionResponse(writer: SerializationWriter, accessReviewStageCollectionResponse: AccessReviewStageCollectionResponse | undefined = {} as AccessReviewStageCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessReviewStageCollectionResponse)
        writer.writeCollectionOfObjectValues<AccessReviewStage>("value", accessReviewStageCollectionResponse.value, serializeAccessReviewStage);
}
