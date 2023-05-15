import {createEducationAssignmentPointsGradeFromDiscriminatorValue} from './createEducationAssignmentPointsGradeFromDiscriminatorValue';
import {deserializeIntoEducationOutcome} from './deserializeIntoEducationOutcome';
import {EducationAssignmentPointsGrade} from './educationAssignmentPointsGrade';
import {EducationPointsOutcome} from './educationPointsOutcome';
import {serializeEducationAssignmentPointsGrade} from './serializeEducationAssignmentPointsGrade';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationPointsOutcome(educationPointsOutcome: EducationPointsOutcome | undefined = {} as EducationPointsOutcome) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationOutcome(educationPointsOutcome),
        "points": n => { educationPointsOutcome.points = n.getObjectValue<EducationAssignmentPointsGrade>(createEducationAssignmentPointsGradeFromDiscriminatorValue); },
        "publishedPoints": n => { educationPointsOutcome.publishedPoints = n.getObjectValue<EducationAssignmentPointsGrade>(createEducationAssignmentPointsGradeFromDiscriminatorValue); },
    }
}
