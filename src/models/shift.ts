import {ChangeTrackedEntity} from './changeTrackedEntity';
import {ShiftItem} from './shiftItem';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Shift extends ChangeTrackedEntity, Parsable {
    /**
     * The draft version of this shift that is viewable by managers. Required.
     */
    draftShift?: ShiftItem | undefined;
    /**
     * ID of the scheduling group the shift is part of. Required.
     */
    schedulingGroupId?: string | undefined;
    /**
     * The shared version of this shift that is viewable by both employees and managers. Required.
     */
    sharedShift?: ShiftItem | undefined;
    /**
     * ID of the user assigned to the shift. Required.
     */
    userId?: string | undefined;
}
