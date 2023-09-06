import { createEducationAssignmentPointsGradeFromDiscriminatorValue } from './createEducationAssignmentPointsGradeFromDiscriminatorValue';
import { deserializeIntoEducationOutcome } from './deserializeIntoEducationOutcome';
import { type EducationAssignmentPointsGrade } from './educationAssignmentPointsGrade';
import { type EducationPointsOutcome } from './educationPointsOutcome';
import { serializeEducationAssignmentPointsGrade } from './serializeEducationAssignmentPointsGrade';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationPointsOutcome(educationPointsOutcome: EducationPointsOutcome | undefined = {} as EducationPointsOutcome) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationOutcome(educationPointsOutcome),
        "points": n => { educationPointsOutcome.points = n.getObjectValue<EducationAssignmentPointsGrade>(createEducationAssignmentPointsGradeFromDiscriminatorValue); },
        "publishedPoints": n => { educationPointsOutcome.publishedPoints = n.getObjectValue<EducationAssignmentPointsGrade>(createEducationAssignmentPointsGradeFromDiscriminatorValue); },
    }
}
