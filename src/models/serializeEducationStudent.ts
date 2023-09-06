import { EducationGender } from './educationGender';
import { type EducationStudent } from './educationStudent';
import { DateOnly, type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEducationStudent(writer: SerializationWriter, educationStudent: EducationStudent | undefined = {} as EducationStudent) : void {
        writer.writeDateOnlyValue("birthDate", educationStudent.birthDate);
        writer.writeStringValue("externalId", educationStudent.externalId);
        writer.writeEnumValue<EducationGender>("gender", educationStudent.gender);
        writer.writeStringValue("grade", educationStudent.grade);
        writer.writeStringValue("graduationYear", educationStudent.graduationYear);
        writer.writeStringValue("@odata.type", educationStudent.odataType);
        writer.writeStringValue("studentNumber", educationStudent.studentNumber);
        writer.writeAdditionalData(educationStudent.additionalData);
}
