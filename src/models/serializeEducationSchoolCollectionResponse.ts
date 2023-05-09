import {EducationSchool} from './educationSchool';
import {EducationSchoolCollectionResponse} from './educationSchoolCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeEducationSchool} from './serializeEducationSchool';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationSchoolCollectionResponse(writer: SerializationWriter, educationSchoolCollectionResponse: EducationSchoolCollectionResponse | undefined = {} as EducationSchoolCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, educationSchoolCollectionResponse)
        writer.writeCollectionOfObjectValues<EducationSchool>("value", educationSchoolCollectionResponse.value, serializeEducationSchool);
}
