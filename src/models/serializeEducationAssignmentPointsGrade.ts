import { type EducationAssignmentPointsGrade } from './educationAssignmentPointsGrade';
import { serializeEducationAssignmentGrade } from './serializeEducationAssignmentGrade';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEducationAssignmentPointsGrade(writer: SerializationWriter, educationAssignmentPointsGrade: EducationAssignmentPointsGrade | undefined = {} as EducationAssignmentPointsGrade) : void {
        serializeEducationAssignmentGrade(writer, educationAssignmentPointsGrade)
        writer.writeNumberValue("points", educationAssignmentPointsGrade.points);
}
