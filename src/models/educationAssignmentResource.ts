import {EducationResource} from './educationResource';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationAssignmentResource extends Entity, Parsable {
    /**
     * Indicates whether this resource should be copied to each student submission for modification and submission. Required
     */
    distributeForStudentWork?: boolean | undefined;
    /**
     * Resource object that has been associated with this assignment.
     */
    resource?: EducationResource | undefined;
}
