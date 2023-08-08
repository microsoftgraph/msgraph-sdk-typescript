import type {AvailabilityItem} from './availabilityItem';
import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface StaffAvailabilityItem extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Each item in this collection indicates a slot and the status of the staff member.
     */
    availabilityItems?: AvailabilityItem[] | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The ID of the staff member.
     */
    staffId?: string | undefined;
}
