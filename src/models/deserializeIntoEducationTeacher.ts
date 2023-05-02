import {EducationTeacher} from './educationTeacher';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationTeacher(educationTeacher: EducationTeacher | undefined = {} as EducationTeacher) : Record<string, (node: ParseNode) => void> {
    return {
        "externalId": n => { educationTeacher.externalId = n.getStringValue(); },
        "@odata.type": n => { educationTeacher.odataType = n.getStringValue(); },
        "teacherNumber": n => { educationTeacher.teacherNumber = n.getStringValue(); },
    }
}
