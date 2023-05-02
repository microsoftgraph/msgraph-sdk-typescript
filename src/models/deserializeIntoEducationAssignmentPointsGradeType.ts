import {deserializeIntoEducationAssignmentGradeType} from './deserializeIntoEducationAssignmentGradeType';
import {EducationAssignmentPointsGradeType} from './educationAssignmentPointsGradeType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationAssignmentPointsGradeType(educationAssignmentPointsGradeType: EducationAssignmentPointsGradeType | undefined = {} as EducationAssignmentPointsGradeType) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationAssignmentGradeType(educationAssignmentPointsGradeType),
        "maxPoints": n => { educationAssignmentPointsGradeType.maxPoints = n.getNumberValue(); },
    }
}
