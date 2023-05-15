import {FreeBusyError} from './freeBusyError';
import {ScheduleInformation} from './scheduleInformation';
import {ScheduleItem} from './scheduleItem';
import {serializeFreeBusyError} from './serializeFreeBusyError';
import {serializeScheduleItem} from './serializeScheduleItem';
import {serializeWorkingHours} from './serializeWorkingHours';
import {WorkingHours} from './workingHours';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeScheduleInformation(writer: SerializationWriter, scheduleInformation: ScheduleInformation | undefined = {} as ScheduleInformation) : void {
        writer.writeStringValue("availabilityView", scheduleInformation.availabilityView);
        writer.writeObjectValue<FreeBusyError>("error", scheduleInformation.errorEscaped, serializeFreeBusyError);
        writer.writeStringValue("@odata.type", scheduleInformation.odataType);
        writer.writeStringValue("scheduleId", scheduleInformation.scheduleId);
        writer.writeCollectionOfObjectValues<ScheduleItem>("scheduleItems", scheduleInformation.scheduleItems, serializeScheduleItem);
        writer.writeObjectValue<WorkingHours>("workingHours", scheduleInformation.workingHours, serializeWorkingHours);
        writer.writeAdditionalData(scheduleInformation.additionalData);
}
