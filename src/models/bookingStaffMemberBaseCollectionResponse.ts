import {BookingStaffMemberBase} from './bookingStaffMemberBase';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface BookingStaffMemberBaseCollectionResponse extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The nextLink property */
    nextLink?: string | undefined;
    /** The value property */
    value?: BookingStaffMemberBase[] | undefined;
}
