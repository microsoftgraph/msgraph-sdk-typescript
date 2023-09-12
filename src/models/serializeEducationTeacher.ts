import { type EducationTeacher } from './educationTeacher';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEducationTeacher(writer: SerializationWriter, educationTeacher: EducationTeacher | undefined = {} as EducationTeacher) : void {
        writer.writeStringValue("externalId", educationTeacher.externalId);
        writer.writeStringValue("@odata.type", educationTeacher.odataType);
        writer.writeStringValue("teacherNumber", educationTeacher.teacherNumber);
        writer.writeAdditionalData(educationTeacher.additionalData);
}
