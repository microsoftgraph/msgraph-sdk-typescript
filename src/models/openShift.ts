import { type ChangeTrackedEntity } from './changeTrackedEntity';
import { type OpenShiftItem } from './openShiftItem';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface OpenShift extends ChangeTrackedEntity, Parsable {
    /**
     * An unpublished open shift.
     */
    draftOpenShift?: OpenShiftItem | undefined;
    /**
     * ID for the scheduling group that the open shift belongs to.
     */
    schedulingGroupId?: string | undefined;
    /**
     * A published open shift.
     */
    sharedOpenShift?: OpenShiftItem | undefined;
}
