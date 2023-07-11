import {ChangeTrackedEntity} from './changeTrackedEntity';
import {TimeOffItem} from './timeOffItem';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TimeOff extends ChangeTrackedEntity, Parsable {
    /**
     * The draft version of this timeOff that is viewable by managers. Required.
     */
    draftTimeOff?: TimeOffItem | undefined;
    /**
     * The shared version of this timeOff that is viewable by both employees and managers. Required.
     */
    sharedTimeOff?: TimeOffItem | undefined;
    /**
     * ID of the user assigned to the timeOff. Required.
     */
    userId?: string | undefined;
}
