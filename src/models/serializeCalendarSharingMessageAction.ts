import {CalendarSharingAction} from './calendarSharingAction';
import {CalendarSharingActionImportance} from './calendarSharingActionImportance';
import {CalendarSharingActionType} from './calendarSharingActionType';
import {CalendarSharingMessageAction} from './calendarSharingMessageAction';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCalendarSharingMessageAction(calendarSharingMessageAction: CalendarSharingMessageAction | undefined = {} as CalendarSharingMessageAction, writer: SerializationWriter) : void {
        writer.writeEnumValue<CalendarSharingAction>("action", calendarSharingMessageAction.action);
        writer.writeEnumValue<CalendarSharingActionType>("actionType", calendarSharingMessageAction.actionType);
        writer.writeEnumValue<CalendarSharingActionImportance>("importance", calendarSharingMessageAction.importance);
        writer.writeStringValue("@odata.type", calendarSharingMessageAction.odataType);
        writer.writeAdditionalData(calendarSharingMessageAction.additionalData);
}
