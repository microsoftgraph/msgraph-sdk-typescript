import {AccessReviewScheduleDefinition} from './accessReviewScheduleDefinition';
import {AccessReviewScheduleDefinitionCollectionResponse} from './accessReviewScheduleDefinitionCollectionResponse';
import {serializeAccessReviewScheduleDefinition} from './serializeAccessReviewScheduleDefinition';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewScheduleDefinitionCollectionResponse(accessReviewScheduleDefinitionCollectionResponse: AccessReviewScheduleDefinitionCollectionResponse | undefined = {} as AccessReviewScheduleDefinitionCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessReviewScheduleDefinitionCollectionResponse)
        writer.writeCollectionOfObjectValues<AccessReviewScheduleDefinition>("value", accessReviewScheduleDefinitionCollectionResponse.value, serializeAccessReviewScheduleDefinition);
}
