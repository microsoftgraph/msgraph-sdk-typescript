import {AssignmentType} from './assignmentType';
import {DateTimeTimeZone} from './dateTimeTimeZone';
import {ItemBody} from './itemBody';
import {LearningCourseActivity} from './learningCourseActivity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface LearningAssignment extends LearningCourseActivity, Parsable {
    /**
     * Assigned date for the course activity. Optional.
     */
    assignedDateTime?: Date | undefined;
    /**
     * The user ID of the assigner. Optional.
     */
    assignerUserId?: string | undefined;
    /**
     * The assignmentType property
     */
    assignmentType?: AssignmentType | undefined;
    /**
     * Due date for the course activity. Optional.
     */
    dueDateTime?: DateTimeTimeZone | undefined;
    /**
     * Notes for the course activity. Optional.
     */
    notes?: ItemBody | undefined;
}
