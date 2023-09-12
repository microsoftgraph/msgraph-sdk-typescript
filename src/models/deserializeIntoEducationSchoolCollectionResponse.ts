import { createEducationSchoolFromDiscriminatorValue } from './createEducationSchoolFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type EducationSchool } from './educationSchool';
import { type EducationSchoolCollectionResponse } from './educationSchoolCollectionResponse';
import { serializeEducationSchool } from './serializeEducationSchool';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationSchoolCollectionResponse(educationSchoolCollectionResponse: EducationSchoolCollectionResponse | undefined = {} as EducationSchoolCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(educationSchoolCollectionResponse),
        "value": n => { educationSchoolCollectionResponse.value = n.getCollectionOfObjectValues<EducationSchool>(createEducationSchoolFromDiscriminatorValue); },
    }
}
