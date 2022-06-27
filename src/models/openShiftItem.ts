import {ShiftItem} from './shiftItem';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface OpenShiftItem extends Partial<AdditionalDataHolder>, Partial<Parsable>, ShiftItem {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Count of the number of slots for the given open shift. */
    openSlotCount?: number | undefined;
}
