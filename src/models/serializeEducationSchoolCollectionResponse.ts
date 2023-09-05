import { type EducationSchool } from './educationSchool';
import { type EducationSchoolCollectionResponse } from './educationSchoolCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeEducationSchool } from './serializeEducationSchool';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEducationSchoolCollectionResponse(writer: SerializationWriter, educationSchoolCollectionResponse: EducationSchoolCollectionResponse | undefined = {} as EducationSchoolCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, educationSchoolCollectionResponse)
        writer.writeCollectionOfObjectValues<EducationSchool>("value", educationSchoolCollectionResponse.value, serializeEducationSchool);
}
