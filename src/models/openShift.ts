import {ChangeTrackedEntity} from './changeTrackedEntity';
import {OpenShiftItem} from './openShiftItem';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface OpenShift extends Partial<AdditionalDataHolder>, ChangeTrackedEntity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** An unpublished open shift. */
    draftOpenShift?: OpenShiftItem | undefined;
    /** ID for the scheduling group that the open shift belongs to. */
    schedulingGroupId?: string | undefined;
    /** A published open shift. */
    sharedOpenShift?: OpenShiftItem | undefined;
}
