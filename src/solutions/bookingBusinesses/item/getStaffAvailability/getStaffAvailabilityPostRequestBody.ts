import type {DateTimeTimeZone} from '../../../../models/dateTimeTimeZone';
import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface GetStaffAvailabilityPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The endDateTime property
     */
    endDateTime?: DateTimeTimeZone | undefined;
    /**
     * The staffIds property
     */
    staffIds?: string[] | undefined;
    /**
     * The startDateTime property
     */
    startDateTime?: DateTimeTimeZone | undefined;
}
