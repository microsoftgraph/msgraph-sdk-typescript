import {AssignmentType} from './assignmentType';
import {DateTimeTimeZone} from './dateTimeTimeZone';
import {ItemBody} from './itemBody';
import {LearningAssignment} from './learningAssignment';
import {serializeDateTimeTimeZone} from './serializeDateTimeTimeZone';
import {serializeItemBody} from './serializeItemBody';
import {serializeLearningCourseActivity} from './serializeLearningCourseActivity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLearningAssignment(writer: SerializationWriter, learningAssignment: LearningAssignment | undefined = {} as LearningAssignment) : void {
        serializeLearningCourseActivity(writer, learningAssignment)
        writer.writeDateValue("assignedDateTime", learningAssignment.assignedDateTime);
        writer.writeStringValue("assignerUserId", learningAssignment.assignerUserId);
        writer.writeEnumValue<AssignmentType>("assignmentType", learningAssignment.assignmentType);
        writer.writeObjectValue<DateTimeTimeZone>("dueDateTime", learningAssignment.dueDateTime, serializeDateTimeTimeZone);
        writer.writeObjectValue<ItemBody>("notes", learningAssignment.notes, serializeItemBody);
}
