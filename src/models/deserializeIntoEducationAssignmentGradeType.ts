import { type EducationAssignmentGradeType } from './educationAssignmentGradeType';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationAssignmentGradeType(educationAssignmentGradeType: EducationAssignmentGradeType | undefined = {} as EducationAssignmentGradeType) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { educationAssignmentGradeType.odataType = n.getStringValue(); },
    }
}
