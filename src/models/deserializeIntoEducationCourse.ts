import { type EducationCourse } from './educationCourse';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationCourse(educationCourse: EducationCourse | undefined = {} as EducationCourse) : Record<string, (node: ParseNode) => void> {
    return {
        "courseNumber": n => { educationCourse.courseNumber = n.getStringValue(); },
        "description": n => { educationCourse.description = n.getStringValue(); },
        "displayName": n => { educationCourse.displayName = n.getStringValue(); },
        "externalId": n => { educationCourse.externalId = n.getStringValue(); },
        "@odata.type": n => { educationCourse.odataType = n.getStringValue(); },
        "subject": n => { educationCourse.subject = n.getStringValue(); },
    }
}
