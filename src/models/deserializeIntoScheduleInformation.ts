import {createFreeBusyErrorFromDiscriminatorValue} from './createFreeBusyErrorFromDiscriminatorValue';
import {createScheduleItemFromDiscriminatorValue} from './createScheduleItemFromDiscriminatorValue';
import {createWorkingHoursFromDiscriminatorValue} from './createWorkingHoursFromDiscriminatorValue';
import {FreeBusyError} from './freeBusyError';
import {ScheduleInformation} from './scheduleInformation';
import {ScheduleItem} from './scheduleItem';
import {serializeFreeBusyError} from './serializeFreeBusyError';
import {serializeScheduleItem} from './serializeScheduleItem';
import {serializeWorkingHours} from './serializeWorkingHours';
import {WorkingHours} from './workingHours';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoScheduleInformation(scheduleInformation: ScheduleInformation | undefined = {} as ScheduleInformation) : Record<string, (node: ParseNode) => void> {
    return {
        "availabilityView": n => { scheduleInformation.availabilityView = n.getStringValue(); },
        "error": n => { scheduleInformation.errorEscaped = n.getObjectValue<FreeBusyError>(createFreeBusyErrorFromDiscriminatorValue); },
        "@odata.type": n => { scheduleInformation.odataType = n.getStringValue(); },
        "scheduleId": n => { scheduleInformation.scheduleId = n.getStringValue(); },
        "scheduleItems": n => { scheduleInformation.scheduleItems = n.getCollectionOfObjectValues<ScheduleItem>(createScheduleItemFromDiscriminatorValue); },
        "workingHours": n => { scheduleInformation.workingHours = n.getObjectValue<WorkingHours>(createWorkingHoursFromDiscriminatorValue); },
    }
}
