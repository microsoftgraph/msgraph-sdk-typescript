import {ShiftItem} from './shiftItem';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OpenShiftItem extends Partial<Parsable>, ShiftItem {
    /** Count of the number of slots for the given open shift. */
    openSlotCount?: number | undefined;
}
