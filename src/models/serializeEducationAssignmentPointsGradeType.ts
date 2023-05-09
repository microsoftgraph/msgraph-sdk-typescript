import {EducationAssignmentPointsGradeType} from './educationAssignmentPointsGradeType';
import {serializeEducationAssignmentGradeType} from './serializeEducationAssignmentGradeType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationAssignmentPointsGradeType(writer: SerializationWriter, educationAssignmentPointsGradeType: EducationAssignmentPointsGradeType | undefined = {} as EducationAssignmentPointsGradeType) : void {
        serializeEducationAssignmentGradeType(writer, educationAssignmentPointsGradeType)
        writer.writeNumberValue("maxPoints", educationAssignmentPointsGradeType.maxPoints);
}
