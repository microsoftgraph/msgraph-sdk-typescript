import {AssignmentType} from './assignmentType';
import {createDateTimeTimeZoneFromDiscriminatorValue} from './createDateTimeTimeZoneFromDiscriminatorValue';
import {createItemBodyFromDiscriminatorValue} from './createItemBodyFromDiscriminatorValue';
import {DateTimeTimeZone} from './dateTimeTimeZone';
import {deserializeIntoLearningCourseActivity} from './deserializeIntoLearningCourseActivity';
import {ItemBody} from './itemBody';
import {LearningAssignment} from './learningAssignment';
import {serializeDateTimeTimeZone} from './serializeDateTimeTimeZone';
import {serializeItemBody} from './serializeItemBody';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLearningAssignment(learningAssignment: LearningAssignment | undefined = {} as LearningAssignment) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoLearningCourseActivity(learningAssignment),
        "assignedDateTime": n => { learningAssignment.assignedDateTime = n.getDateValue(); },
        "assignerUserId": n => { learningAssignment.assignerUserId = n.getStringValue(); },
        "assignmentType": n => { learningAssignment.assignmentType = n.getEnumValue<AssignmentType>(AssignmentType); },
        "dueDateTime": n => { learningAssignment.dueDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
        "notes": n => { learningAssignment.notes = n.getObjectValue<ItemBody>(createItemBodyFromDiscriminatorValue); },
    }
}
