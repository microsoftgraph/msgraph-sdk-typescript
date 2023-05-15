import {EducationAssignmentPointsGrade} from './educationAssignmentPointsGrade';
import {EducationPointsOutcome} from './educationPointsOutcome';
import {serializeEducationAssignmentPointsGrade} from './serializeEducationAssignmentPointsGrade';
import {serializeEducationOutcome} from './serializeEducationOutcome';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationPointsOutcome(writer: SerializationWriter, educationPointsOutcome: EducationPointsOutcome | undefined = {} as EducationPointsOutcome) : void {
        serializeEducationOutcome(writer, educationPointsOutcome)
        writer.writeObjectValue<EducationAssignmentPointsGrade>("points", educationPointsOutcome.points, serializeEducationAssignmentPointsGrade);
        writer.writeObjectValue<EducationAssignmentPointsGrade>("publishedPoints", educationPointsOutcome.publishedPoints, serializeEducationAssignmentPointsGrade);
}
