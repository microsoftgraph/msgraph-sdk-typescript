import {ChangeTrackedEntity} from './changeTrackedEntity';
import {ShiftItem} from './shiftItem';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Shift extends Partial<AdditionalDataHolder>, ChangeTrackedEntity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The draft version of this shift that is viewable by managers. Required. */
    draftShift?: ShiftItem | undefined;
    /** ID of the scheduling group the shift is part of. Required. */
    schedulingGroupId?: string | undefined;
    /** The shared version of this shift that is viewable by both employees and managers. Required. */
    sharedShift?: ShiftItem | undefined;
    /** ID of the user assigned to the shift. Required. */
    userId?: string | undefined;
}
