import type {EducationAssignmentPointsGradeType} from './educationAssignmentPointsGradeType';
import {serializeEducationAssignmentGradeType} from './serializeEducationAssignmentGradeType';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationAssignmentPointsGradeType(writer: SerializationWriter, educationAssignmentPointsGradeType: EducationAssignmentPointsGradeType | undefined = {} as EducationAssignmentPointsGradeType) : void {
        serializeEducationAssignmentGradeType(writer, educationAssignmentPointsGradeType)
        writer.writeNumberValue("maxPoints", educationAssignmentPointsGradeType.maxPoints);
}
