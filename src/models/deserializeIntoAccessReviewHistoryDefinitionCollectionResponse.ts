import type {AccessReviewHistoryDefinition} from './accessReviewHistoryDefinition';
import type {AccessReviewHistoryDefinitionCollectionResponse} from './accessReviewHistoryDefinitionCollectionResponse';
import {createAccessReviewHistoryDefinitionFromDiscriminatorValue} from './createAccessReviewHistoryDefinitionFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeAccessReviewHistoryDefinition} from './serializeAccessReviewHistoryDefinition';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewHistoryDefinitionCollectionResponse(accessReviewHistoryDefinitionCollectionResponse: AccessReviewHistoryDefinitionCollectionResponse | undefined = {} as AccessReviewHistoryDefinitionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(accessReviewHistoryDefinitionCollectionResponse),
        "value": n => { accessReviewHistoryDefinitionCollectionResponse.value = n.getCollectionOfObjectValues<AccessReviewHistoryDefinition>(createAccessReviewHistoryDefinitionFromDiscriminatorValue); },
    }
}
