import {Entity} from './entity';
import {LearningCourseActivity} from './learningCourseActivity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EmployeeExperienceUser extends Entity, Parsable {
    /**
     * The learningCourseActivities property
     */
    learningCourseActivities?: LearningCourseActivity[] | undefined;
}
