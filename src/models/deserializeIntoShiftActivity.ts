import {ScheduleEntityTheme} from './scheduleEntityTheme';
import {ShiftActivity} from './shiftActivity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoShiftActivity(shiftActivity: ShiftActivity | undefined = {} as ShiftActivity) : Record<string, (node: ParseNode) => void> {
    return {
        "code": n => { shiftActivity.code = n.getStringValue(); },
        "displayName": n => { shiftActivity.displayName = n.getStringValue(); },
        "endDateTime": n => { shiftActivity.endDateTime = n.getDateValue(); },
        "isPaid": n => { shiftActivity.isPaid = n.getBooleanValue(); },
        "@odata.type": n => { shiftActivity.odataType = n.getStringValue(); },
        "startDateTime": n => { shiftActivity.startDateTime = n.getDateValue(); },
        "theme": n => { shiftActivity.theme = n.getEnumValue<ScheduleEntityTheme>(ScheduleEntityTheme); },
    }
}
