import {EducationAssignmentGradeType} from './educationAssignmentGradeType';
import {EducationItemBody} from './educationItemBody';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RubricLevel extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The description of this rubric level.
     */
    description?: EducationItemBody | undefined;
    /**
     * The name of this rubric level.
     */
    displayName?: string | undefined;
    /**
     * Null if this is a no-points rubric; educationAssignmentPointsGradeType if it is a points rubric.
     */
    grading?: EducationAssignmentGradeType | undefined;
    /**
     * The ID of this resource.
     */
    levelId?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
