import {EducationAssignmentPointsGrade} from './educationAssignmentPointsGrade';
import {serializeEducationAssignmentGrade} from './serializeEducationAssignmentGrade';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationAssignmentPointsGrade(educationAssignmentPointsGrade: EducationAssignmentPointsGrade | undefined = {} as EducationAssignmentPointsGrade, writer: SerializationWriter) : void {
        serializeEducationAssignmentGrade(writer, educationAssignmentPointsGrade)
        writer.writeNumberValue("points", educationAssignmentPointsGrade.points);
}
