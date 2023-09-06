import { EducationAddedStudentAction } from './educationAddedStudentAction';
import { EducationAddToCalendarOptions } from './educationAddToCalendarOptions';
import { type EducationAssignmentDefaults } from './educationAssignmentDefaults';
import { serializeEntity } from './serializeEntity';
import { TimeOnly, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEducationAssignmentDefaults(writer: SerializationWriter, educationAssignmentDefaults: EducationAssignmentDefaults | undefined = {} as EducationAssignmentDefaults) : void {
        serializeEntity(writer, educationAssignmentDefaults)
        writer.writeEnumValue<EducationAddedStudentAction>("addedStudentAction", educationAssignmentDefaults.addedStudentAction);
        writer.writeEnumValue<EducationAddToCalendarOptions>("addToCalendarAction", educationAssignmentDefaults.addToCalendarAction);
        writer.writeTimeOnlyValue("dueTime", educationAssignmentDefaults.dueTime);
        writer.writeStringValue("notificationChannelUrl", educationAssignmentDefaults.notificationChannelUrl);
}
