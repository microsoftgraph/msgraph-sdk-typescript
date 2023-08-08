import type {ShiftItem} from './shiftItem';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface OpenShiftItem extends Parsable, ShiftItem {
    /**
     * Count of the number of slots for the given open shift.
     */
    openSlotCount?: number | undefined;
}
