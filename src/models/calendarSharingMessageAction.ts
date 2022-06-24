import {CalendarSharingAction} from './calendarSharingAction';
import {CalendarSharingActionImportance} from './calendarSharingActionImportance';
import {CalendarSharingActionType} from './calendarSharingActionType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CalendarSharingMessageAction extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** The action property */
    action?: CalendarSharingAction | undefined;
    /** The actionType property */
    actionType?: CalendarSharingActionType | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The importance property */
    importance?: CalendarSharingActionImportance | undefined;
}
