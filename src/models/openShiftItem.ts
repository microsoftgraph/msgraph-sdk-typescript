import {ShiftItem} from './shiftItem';

export interface OpenShiftItem extends ShiftItem{
    /** Count of the number of slots for the given open shift. */
    openSlotCount?:number | undefined;
}
