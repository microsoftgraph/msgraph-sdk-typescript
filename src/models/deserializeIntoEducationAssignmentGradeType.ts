import type {EducationAssignmentGradeType} from './educationAssignmentGradeType';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationAssignmentGradeType(educationAssignmentGradeType: EducationAssignmentGradeType | undefined = {} as EducationAssignmentGradeType) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { educationAssignmentGradeType.odataType = n.getStringValue(); },
    }
}
