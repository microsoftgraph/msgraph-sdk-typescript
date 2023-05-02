import {EducationGender} from './educationGender';
import {EducationStudent} from './educationStudent';
import {AdditionalDataHolder, DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationStudent(educationStudent: EducationStudent | undefined = {} as EducationStudent) : Record<string, (node: ParseNode) => void> {
    return {
        "birthDate": n => { educationStudent.birthDate = n.getDateOnlyValue(); },
        "externalId": n => { educationStudent.externalId = n.getStringValue(); },
        "gender": n => { educationStudent.gender = n.getEnumValue<EducationGender>(EducationGender); },
        "grade": n => { educationStudent.grade = n.getStringValue(); },
        "graduationYear": n => { educationStudent.graduationYear = n.getStringValue(); },
        "@odata.type": n => { educationStudent.odataType = n.getStringValue(); },
        "studentNumber": n => { educationStudent.studentNumber = n.getStringValue(); },
    }
}
