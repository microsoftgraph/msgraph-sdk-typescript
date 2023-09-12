import { CalendarSharingAction } from './calendarSharingAction';
import { CalendarSharingActionImportance } from './calendarSharingActionImportance';
import { CalendarSharingActionType } from './calendarSharingActionType';
import { type CalendarSharingMessageAction } from './calendarSharingMessageAction';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCalendarSharingMessageAction(writer: SerializationWriter, calendarSharingMessageAction: CalendarSharingMessageAction | undefined = {} as CalendarSharingMessageAction) : void {
        writer.writeEnumValue<CalendarSharingAction>("action", calendarSharingMessageAction.action);
        writer.writeEnumValue<CalendarSharingActionType>("actionType", calendarSharingMessageAction.actionType);
        writer.writeEnumValue<CalendarSharingActionImportance>("importance", calendarSharingMessageAction.importance);
        writer.writeStringValue("@odata.type", calendarSharingMessageAction.odataType);
        writer.writeAdditionalData(calendarSharingMessageAction.additionalData);
}
