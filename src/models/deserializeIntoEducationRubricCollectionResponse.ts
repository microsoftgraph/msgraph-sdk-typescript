import { createEducationRubricFromDiscriminatorValue } from './createEducationRubricFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type EducationRubric } from './educationRubric';
import { type EducationRubricCollectionResponse } from './educationRubricCollectionResponse';
import { serializeEducationRubric } from './serializeEducationRubric';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationRubricCollectionResponse(educationRubricCollectionResponse: EducationRubricCollectionResponse | undefined = {} as EducationRubricCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(educationRubricCollectionResponse),
        "value": n => { educationRubricCollectionResponse.value = n.getCollectionOfObjectValues<EducationRubric>(createEducationRubricFromDiscriminatorValue); },
    }
}
