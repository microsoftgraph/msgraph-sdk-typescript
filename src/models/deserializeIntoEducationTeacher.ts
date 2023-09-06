import { type EducationTeacher } from './educationTeacher';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationTeacher(educationTeacher: EducationTeacher | undefined = {} as EducationTeacher) : Record<string, (node: ParseNode) => void> {
    return {
        "externalId": n => { educationTeacher.externalId = n.getStringValue(); },
        "@odata.type": n => { educationTeacher.odataType = n.getStringValue(); },
        "teacherNumber": n => { educationTeacher.teacherNumber = n.getStringValue(); },
    }
}
