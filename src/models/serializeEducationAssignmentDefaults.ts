import {EducationAddToCalendarOptions} from './educationAddToCalendarOptions';
import {EducationAddedStudentAction} from './educationAddedStudentAction';
import type {EducationAssignmentDefaults} from './educationAssignmentDefaults';
import {serializeEntity} from './serializeEntity';
import {TimeOnly} from '@microsoft/kiota-abstractions';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationAssignmentDefaults(writer: SerializationWriter, educationAssignmentDefaults: EducationAssignmentDefaults | undefined = {} as EducationAssignmentDefaults) : void {
        serializeEntity(writer, educationAssignmentDefaults)
        writer.writeEnumValue<EducationAddedStudentAction>("addedStudentAction", educationAssignmentDefaults.addedStudentAction);
        writer.writeEnumValue<EducationAddToCalendarOptions>("addToCalendarAction", educationAssignmentDefaults.addToCalendarAction);
        writer.writeTimeOnlyValue("dueTime", educationAssignmentDefaults.dueTime);
        writer.writeStringValue("notificationChannelUrl", educationAssignmentDefaults.notificationChannelUrl);
}
