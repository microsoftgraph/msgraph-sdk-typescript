import {AccessReviewScheduleDefinition} from './accessReviewScheduleDefinition';
import {AccessReviewScheduleDefinitionCollectionResponse} from './accessReviewScheduleDefinitionCollectionResponse';
import {createAccessReviewScheduleDefinitionFromDiscriminatorValue} from './createAccessReviewScheduleDefinitionFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeAccessReviewScheduleDefinition} from './serializeAccessReviewScheduleDefinition';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewScheduleDefinitionCollectionResponse(accessReviewScheduleDefinitionCollectionResponse: AccessReviewScheduleDefinitionCollectionResponse | undefined = {} as AccessReviewScheduleDefinitionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(accessReviewScheduleDefinitionCollectionResponse),
        "value": n => { accessReviewScheduleDefinitionCollectionResponse.value = n.getCollectionOfObjectValues<AccessReviewScheduleDefinition>(createAccessReviewScheduleDefinitionFromDiscriminatorValue); },
    }
}
