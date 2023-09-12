import { type Json } from '../../../../../../../models/json';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface WeekdayPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The returnType property
     */
    returnType?: Json | undefined;
    /**
     * The serialNumber property
     */
    serialNumber?: Json | undefined;
}
