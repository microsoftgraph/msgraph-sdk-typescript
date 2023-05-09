import {ScheduleEntityTheme} from './scheduleEntityTheme';
import {ShiftActivity} from './shiftActivity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeShiftActivity(writer: SerializationWriter, shiftActivity: ShiftActivity | undefined = {} as ShiftActivity) : void {
        writer.writeStringValue("code", shiftActivity.code);
        writer.writeStringValue("displayName", shiftActivity.displayName);
        writer.writeDateValue("endDateTime", shiftActivity.endDateTime);
        writer.writeBooleanValue("isPaid", shiftActivity.isPaid);
        writer.writeStringValue("@odata.type", shiftActivity.odataType);
        writer.writeDateValue("startDateTime", shiftActivity.startDateTime);
        writer.writeEnumValue<ScheduleEntityTheme>("theme", shiftActivity.theme);
        writer.writeAdditionalData(shiftActivity.additionalData);
}
