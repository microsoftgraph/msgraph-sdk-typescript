import { createEducationClassFromDiscriminatorValue } from './createEducationClassFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type EducationClass } from './educationClass';
import { type EducationClassCollectionResponse } from './educationClassCollectionResponse';
import { serializeEducationClass } from './serializeEducationClass';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationClassCollectionResponse(educationClassCollectionResponse: EducationClassCollectionResponse | undefined = {} as EducationClassCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(educationClassCollectionResponse),
        "value": n => { educationClassCollectionResponse.value = n.getCollectionOfObjectValues<EducationClass>(createEducationClassFromDiscriminatorValue); },
    }
}
