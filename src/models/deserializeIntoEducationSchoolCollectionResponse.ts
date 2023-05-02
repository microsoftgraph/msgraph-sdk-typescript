import {createEducationSchoolFromDiscriminatorValue} from './createEducationSchoolFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {EducationSchool} from './educationSchool';
import {EducationSchoolCollectionResponse} from './educationSchoolCollectionResponse';
import {serializeEducationSchool} from './serializeEducationSchool';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationSchoolCollectionResponse(educationSchoolCollectionResponse: EducationSchoolCollectionResponse | undefined = {} as EducationSchoolCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(educationSchoolCollectionResponse),
        "value": n => { educationSchoolCollectionResponse.value = n.getCollectionOfObjectValues<EducationSchool>(createEducationSchoolFromDiscriminatorValue); },
    }
}
