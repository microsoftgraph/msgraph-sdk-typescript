import {EducationTeacher} from './educationTeacher';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationTeacher(educationTeacher: EducationTeacher | undefined = {} as EducationTeacher, writer: SerializationWriter) : void {
        writer.writeStringValue("externalId", educationTeacher.externalId);
        writer.writeStringValue("@odata.type", educationTeacher.odataType);
        writer.writeStringValue("teacherNumber", educationTeacher.teacherNumber);
        writer.writeAdditionalData(educationTeacher.additionalData);
}
