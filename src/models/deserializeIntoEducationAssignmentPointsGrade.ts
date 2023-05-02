import {deserializeIntoEducationAssignmentGrade} from './deserializeIntoEducationAssignmentGrade';
import {EducationAssignmentPointsGrade} from './educationAssignmentPointsGrade';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationAssignmentPointsGrade(educationAssignmentPointsGrade: EducationAssignmentPointsGrade | undefined = {} as EducationAssignmentPointsGrade) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationAssignmentGrade(educationAssignmentPointsGrade),
        "points": n => { educationAssignmentPointsGrade.points = n.getNumberValue(); },
    }
}
