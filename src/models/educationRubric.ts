import {EducationAssignmentGradeType} from './educationAssignmentGradeType';
import {EducationItemBody} from './educationItemBody';
import {Entity} from './entity';
import {IdentitySet} from './identitySet';
import {RubricLevel} from './rubricLevel';
import {RubricQuality} from './rubricQuality';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationRubric extends Entity, Parsable {
    /**
     * The user who created this resource.
     */
    createdBy?: IdentitySet | undefined;
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    createdDateTime?: Date | undefined;
    /**
     * The description of this rubric.
     */
    description?: EducationItemBody | undefined;
    /**
     * The name of this rubric.
     */
    displayName?: string | undefined;
    /**
     * The grading type of this rubric -- null for a no-points rubric, or educationAssignmentPointsGradeType for a points rubric.
     */
    grading?: EducationAssignmentGradeType | undefined;
    /**
     * The last user to modify the resource.
     */
    lastModifiedBy?: IdentitySet | undefined;
    /**
     * Moment in time when the resource was last modified.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    lastModifiedDateTime?: Date | undefined;
    /**
     * The collection of levels making up this rubric.
     */
    levels?: RubricLevel[] | undefined;
    /**
     * The collection of qualities making up this rubric.
     */
    qualities?: RubricQuality[] | undefined;
}
