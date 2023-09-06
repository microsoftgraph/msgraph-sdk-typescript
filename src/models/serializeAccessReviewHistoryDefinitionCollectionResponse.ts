import { type AccessReviewHistoryDefinition } from './accessReviewHistoryDefinition';
import { type AccessReviewHistoryDefinitionCollectionResponse } from './accessReviewHistoryDefinitionCollectionResponse';
import { serializeAccessReviewHistoryDefinition } from './serializeAccessReviewHistoryDefinition';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAccessReviewHistoryDefinitionCollectionResponse(writer: SerializationWriter, accessReviewHistoryDefinitionCollectionResponse: AccessReviewHistoryDefinitionCollectionResponse | undefined = {} as AccessReviewHistoryDefinitionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessReviewHistoryDefinitionCollectionResponse)
        writer.writeCollectionOfObjectValues<AccessReviewHistoryDefinition>("value", accessReviewHistoryDefinitionCollectionResponse.value, serializeAccessReviewHistoryDefinition);
}
