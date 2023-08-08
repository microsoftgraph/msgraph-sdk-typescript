import {AssignmentType} from './assignmentType';
import type {DateTimeTimeZone} from './dateTimeTimeZone';
import type {ItemBody} from './itemBody';
import type {LearningCourseActivity} from './learningCourseActivity';
import type {Parsable} from '@microsoft/kiota-abstractions';

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
