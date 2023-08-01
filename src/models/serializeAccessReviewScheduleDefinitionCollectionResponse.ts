import type {AccessReviewScheduleDefinition} from './accessReviewScheduleDefinition';
import type {AccessReviewScheduleDefinitionCollectionResponse} from './accessReviewScheduleDefinitionCollectionResponse';
import {serializeAccessReviewScheduleDefinition} from './serializeAccessReviewScheduleDefinition';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewScheduleDefinitionCollectionResponse(writer: SerializationWriter, accessReviewScheduleDefinitionCollectionResponse: AccessReviewScheduleDefinitionCollectionResponse | undefined = {} as AccessReviewScheduleDefinitionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessReviewScheduleDefinitionCollectionResponse)
        writer.writeCollectionOfObjectValues<AccessReviewScheduleDefinition>("value", accessReviewScheduleDefinitionCollectionResponse.value, serializeAccessReviewScheduleDefinition);
}
