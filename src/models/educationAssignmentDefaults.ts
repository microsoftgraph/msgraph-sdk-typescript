import {EducationAddedStudentAction} from './educationAddedStudentAction';
import {EducationAddToCalendarOptions} from './educationAddToCalendarOptions';
import {Entity} from './entity';
import {Parsable, TimeOnly} from '@microsoft/kiota-abstractions';

export interface EducationAssignmentDefaults extends Entity, Parsable {
    /**
     * Class-level default behavior for handling students who are added after the assignment is published. Possible values are: none, assignIfOpen.
     */
    addedStudentAction?: EducationAddedStudentAction | undefined;
    /**
     * Optional field to control adding assignments to students' and teachers' calendars when the assignment is published. The possible values are: none, studentsAndPublisher, studentsAndTeamOwners, unknownFutureValue, and studentsOnly. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum: studentsOnly. The default value is none.
     */
    addToCalendarAction?: EducationAddToCalendarOptions | undefined;
    /**
     * Class-level default value for due time field. Default value is 23:59:00.
     */
    dueTime?: TimeOnly | undefined;
    /**
     * Default Teams channel to which notifications will be sent. Default value is null.
     */
    notificationChannelUrl?: string | undefined;
}
