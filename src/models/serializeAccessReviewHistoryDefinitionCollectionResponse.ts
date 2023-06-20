import {AccessReviewHistoryDefinition} from './accessReviewHistoryDefinition';
import {AccessReviewHistoryDefinitionCollectionResponse} from './accessReviewHistoryDefinitionCollectionResponse';
import {serializeAccessReviewHistoryDefinition} from './serializeAccessReviewHistoryDefinition';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewHistoryDefinitionCollectionResponse(accessReviewHistoryDefinitionCollectionResponse: AccessReviewHistoryDefinitionCollectionResponse | undefined = {} as AccessReviewHistoryDefinitionCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessReviewHistoryDefinitionCollectionResponse)
        writer.writeCollectionOfObjectValues<AccessReviewHistoryDefinition>("value", accessReviewHistoryDefinitionCollectionResponse.value, serializeAccessReviewHistoryDefinition);
}
