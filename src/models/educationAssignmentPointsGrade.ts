import {EducationAssignmentGrade} from './educationAssignmentGrade';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface EducationAssignmentPointsGrade extends Partial<AdditionalDataHolder>, EducationAssignmentGrade, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Number of points a teacher is giving this submission object. */
    points?: number | undefined;
}
