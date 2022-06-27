import {ChangeTrackedEntity} from './changeTrackedEntity';
import {TimeOffItem} from './timeOffItem';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TimeOff extends Partial<AdditionalDataHolder>, ChangeTrackedEntity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The draft version of this timeOff that is viewable by managers. Required. */
    draftTimeOff?: TimeOffItem | undefined;
    /** The shared version of this timeOff that is viewable by both employees and managers. Required. */
    sharedTimeOff?: TimeOffItem | undefined;
    /** ID of the user assigned to the timeOff. Required. */
    userId?: string | undefined;
}
