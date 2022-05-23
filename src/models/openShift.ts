import {ChangeTrackedEntity} from './changeTrackedEntity';
import {OpenShiftItem} from './openShiftItem';

export interface OpenShift extends ChangeTrackedEntity{
    /** An unpublished open shift. */
    draftOpenShift?:OpenShiftItem | undefined;
    /** ID for the scheduling group that the open shift belongs to. */
    schedulingGroupId?:string | undefined;
    /** A published open shift. */
    sharedOpenShift?:OpenShiftItem | undefined;
}
