import {EducationAssignmentGradeType} from './educationAssignmentGradeType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface EducationAssignmentPointsGradeType extends Partial<AdditionalDataHolder>, EducationAssignmentGradeType, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Max points possible for this assignment. */
    maxPoints?: number | undefined;
}
