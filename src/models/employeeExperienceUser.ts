import { type Entity } from './entity';
import { type LearningCourseActivity } from './learningCourseActivity';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface EmployeeExperienceUser extends Entity, Parsable {
    /**
     * The learningCourseActivities property
     */
    learningCourseActivities?: LearningCourseActivity[] | undefined;
}
