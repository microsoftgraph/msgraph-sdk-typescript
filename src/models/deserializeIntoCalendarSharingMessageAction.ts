import { CalendarSharingAction } from './calendarSharingAction';
import { CalendarSharingActionImportance } from './calendarSharingActionImportance';
import { CalendarSharingActionType } from './calendarSharingActionType';
import { type CalendarSharingMessageAction } from './calendarSharingMessageAction';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoCalendarSharingMessageAction(calendarSharingMessageAction: CalendarSharingMessageAction | undefined = {} as CalendarSharingMessageAction) : Record<string, (node: ParseNode) => void> {
    return {
        "action": n => { calendarSharingMessageAction.action = n.getEnumValue<CalendarSharingAction>(CalendarSharingAction); },
        "actionType": n => { calendarSharingMessageAction.actionType = n.getEnumValue<CalendarSharingActionType>(CalendarSharingActionType); },
        "importance": n => { calendarSharingMessageAction.importance = n.getEnumValue<CalendarSharingActionImportance>(CalendarSharingActionImportance); },
        "@odata.type": n => { calendarSharingMessageAction.odataType = n.getStringValue(); },
    }
}
