import {deserializeIntoEntity} from './deserializeIntoEntity';
import {EducationAddToCalendarOptions} from './educationAddToCalendarOptions';
import {EducationAddedStudentAction} from './educationAddedStudentAction';
import type {EducationAssignmentDefaults} from './educationAssignmentDefaults';
import {TimeOnly} from '@microsoft/kiota-abstractions';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationAssignmentDefaults(educationAssignmentDefaults: EducationAssignmentDefaults | undefined = {} as EducationAssignmentDefaults) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(educationAssignmentDefaults),
        "addedStudentAction": n => { educationAssignmentDefaults.addedStudentAction = n.getEnumValue<EducationAddedStudentAction>(EducationAddedStudentAction); },
        "addToCalendarAction": n => { educationAssignmentDefaults.addToCalendarAction = n.getEnumValue<EducationAddToCalendarOptions>(EducationAddToCalendarOptions); },
        "dueTime": n => { educationAssignmentDefaults.dueTime = n.getTimeOnlyValue(); },
        "notificationChannelUrl": n => { educationAssignmentDefaults.notificationChannelUrl = n.getStringValue(); },
    }
}
