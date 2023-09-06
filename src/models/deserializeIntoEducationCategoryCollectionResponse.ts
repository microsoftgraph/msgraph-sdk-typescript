import { createEducationCategoryFromDiscriminatorValue } from './createEducationCategoryFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type EducationCategory } from './educationCategory';
import { type EducationCategoryCollectionResponse } from './educationCategoryCollectionResponse';
import { serializeEducationCategory } from './serializeEducationCategory';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationCategoryCollectionResponse(educationCategoryCollectionResponse: EducationCategoryCollectionResponse | undefined = {} as EducationCategoryCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(educationCategoryCollectionResponse),
        "value": n => { educationCategoryCollectionResponse.value = n.getCollectionOfObjectValues<EducationCategory>(createEducationCategoryFromDiscriminatorValue); },
    }
}
