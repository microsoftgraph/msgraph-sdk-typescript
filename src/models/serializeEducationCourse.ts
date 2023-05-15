import {EducationCourse} from './educationCourse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationCourse(writer: SerializationWriter, educationCourse: EducationCourse | undefined = {} as EducationCourse) : void {
        writer.writeStringValue("courseNumber", educationCourse.courseNumber);
        writer.writeStringValue("description", educationCourse.description);
        writer.writeStringValue("displayName", educationCourse.displayName);
        writer.writeStringValue("externalId", educationCourse.externalId);
        writer.writeStringValue("@odata.type", educationCourse.odataType);
        writer.writeStringValue("subject", educationCourse.subject);
        writer.writeAdditionalData(educationCourse.additionalData);
}
